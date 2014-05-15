describe("Datatable", function() {
	var dataJson, optionJson, $scope, controller;

	beforeEach(module('ui.datatable'));

	beforeEach(function() {
		dataJson = [{
			'name' : "Magesh",
			'age'  : 21,
			'dob'  : new Date("11/05/1992")
		},
		{
			'name' : "Sam",
			'age'  : 22,
			'dob'  : new Date("3/01/1991")
		},
		{
			'name' : "Tim",
			'age'  : 20,
			'dob'  : new Date("5/03/1993")
		}];
		
		optionJson = {
			'sortable': ['age', 'dob'],
			'display_name': [{'name': 'Name'}, {'age': 'Age'}, {'dob': 'Date Of Birth'}],
			'filter' : {'enable' : true, 'columns' : ['name']},
			'limit' : 5,
		};

		inject(['$rootScope', '$controller', function($rootScope, $controller) {
			$scope = $rootScope.$new();
			$scope.options = optionJson;
			$scope.tableData = dataJson;
			controller = $controller("tableController", {$scope: $scope});
		}]);
	});

	describe("filter", function() {
		it("should display column name", inject(['$filter', function($filter) {			
		var column_name = $filter('displayName')('age', $scope);
		expect(column_name).toBe("Age");
		}]));

		it("should search", inject(['$filter', function($filter) {
			var output = $filter('search')($scope.tableData, 'tim', $scope);
			expect(output.length).toBe(1);
		}]));

		it("should not search when not enabled in options", inject(['$filter', function($filter){
			$scope.options.filter.enable = false;
			var output = $filter('search')($scope.tableData, 'tim', $scope);
			expect(output.length).toBe(3);
		}]));

		it("should not search columns that are not enabled in options", inject(['$filter', function($filter){
			var output = $filter('search')($scope.tableData, 23, $scope);
			expect(output.length).toBe(0);
		}]));

		it("should create a range", inject(['$filter', function($filter){
			var output = $filter('range')([], 4);
			expect(output.length).toBe(4);
		}]));

		it("should paginate", inject(['$filter', function($filter){
			$scope.options.limit = 1;
			var output = $filter('paginator')($scope.tableData, $scope);
			expect(output.length).toBe(1);
			expect(output).toEqual([$scope.tableData[0]]);
			expect($scope.no_of_pages).toBe(3);

			$scope.current_page = 2;
			output = $filter('paginator')($scope.tableData, $scope);
			expect(output.length).toBe(1);
			expect(output).toEqual([$scope.tableData[1]]);
			expect($scope.no_of_pages).toBe(3);

			$scope.current_page = 3;
			output = $filter('paginator')($scope.tableData, $scope);
			expect(output.length).toBe(1);
			expect(output).toEqual([$scope.tableData[2]]);
			expect($scope.no_of_pages).toBe(3);
		}]));

		it("should paginate after search",inject(['$filter', function($filter){
			$scope.options.limit = 1;
			var searchOutput = $filter('search')($scope.tableData, 'tim', $scope);
			output = $filter('paginator')(searchOutput, $scope);
			expect(output.length).toBe(1);
			expect(output).toEqual([$scope.tableData[2]]);
			expect($scope.no_of_pages).toBe(1);
		}]));
	});
	
	describe("Controller", function() {
		it("should get columns from the table data", inject([function() {
			$scope.getColumns();
			expect($scope.columns.length).toBe(3);
			expect($scope.columns).toEqual(['name', 'age', 'dob']);
		}]));

		it("should sort ascending", function() {
			expect($scope.sorter.length).toBe(0);
			$scope.sort("age");
			expect($scope.sorter.length).toBe(1);
			expect($scope.sorter).toEqual(['age']);
		});

		it("should not sort column", function() {
			$scope.sort("name");
			expect($scope.sorter.length).toBe(0);	
			
			$scope.sort("shouldnotwork");
			expect($scope.sorter.length).toBe(0);	

		});

		it("should sort descending on second click", function() {
			$scope.sorter = ['age'];
			$scope.sort('age');
			expect($scope.sorter.length).toBe(1);
			expect($scope.sorter).toEqual(['-age']);
		});

		it("should sort multiple", function() {
			$scope.sort('age');
			$scope.sort('dob');
			expect($scope.sorter.length).toBe(2);
			expect($scope.sorter).toEqual(['dob', 'age']);

			$scope.sort('age');
			expect($scope.sorter.length).toBe(2);
			expect($scope.sorter).toEqual(['-age','dob']);
		});

		it("should go to next page", function() {
			$scope.nextPage();
			expect($scope.current_page).toBe(1);
			$scope.no_of_pages = 2;
			$scope.nextPage();
			$scope.nextPage();
			expect($scope.current_page).toBe(2);
		});

		it("should go to the prev page", function() {
			$scope.current_page = 2;
			$scope.prevPage();
			expect($scope.current_page).toBe(1);
			$scope.prevPage();
			expect($scope.current_page).toBe(1);
		});

		it("should set current page", function() {
			$scope.no_of_pages = 3;
			$scope.setCurrentPage(2);
			expect($scope.current_page).toBe(2);

			$scope.setCurrentPage(5);
			expect($scope.current_page).toBe(2);

			$scope.setCurrentPage(0);
			expect($scope.current_page).toBe(2);			
		});

		it("should change current page to 1 after a search", function() {
			$scope.current_page = 2;
			$scope.$apply();
			expect($scope.current_page).toBe(2);
			$scope.search = "i searched something";
			$scope.$apply();
			expect($scope.current_page).toBe(1);
			$scope.$apply();
			expect($scope.current_page).toBe(1);
		});
	});
});