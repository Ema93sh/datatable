/**
*  Module
*
* Description
*/
angular.module('testModule', ['ui.datatable', 'ui.bootstrap'])
	.controller('testController', ['$scope', '$modal', function($scope, $modal){
		$scope.tableData = [
			{
				'amount' : 400,
				'date_added' : new Date('04-10-2014'),
				'id' : 133
			},
			{
				'amount' : 100,
				'id' : 133,
				'description': "test",
				'date_added' : new Date('01-10-2013')
			},
			{
				'amount' : 100,
				'id' : 133,
				'date_added' : new Date('04-09-2024')
			},
			{
				'id' : 133,
				'amount' : 200,
				'date_added' : new Date('12-10-2014')
			},
			{
				'amount' : 300,
				'description': "my snaofboa",
				'id' : 133,
				'date_added' : new Date('23-10-2014')
			},
			{
				'amount' : 400,
				'date_added' : new Date('04-11-2014')
			},
			{
				'amount' : 100,
				'description': "test",
				'date_added' : new Date('11-11-2011'),
			},
			{
				'amount' : 100,
				'date_added' : new Date('10-12-2014'),
				'description' : "tt"
			},
			{
				'amount' : 200,
				'date_added' : new Date('01-10-2014')
			},
			{
				'amount' : 300,
				'description': "my snaofboa",
				'date_added' : new Date('03-01-2014')
			},
			{
				'amount' : 400,
				'date_added' : new Date('04-02-2014')
			},
			{
				'amount' : 100,
				'description': "test",
				'date_added' : new Date('01-10-2014')
			},
			{
				'amount' : 100,
				'date_added' : new Date('12-23-2014')
			},
			{
				'amount' : 200,
				'date_added' : new Date('02-12-2014')
			},
			{
				'amount' : 300,
				'description': "my snaofboa",
				'date_added' : new Date('03-10-2014')
			}
		];

		$scope.add = function(expense) {
			var data = angular.copy(expense);
			data.date_added = new Date();
			$scope.tableData.push(data);
			$scope.expense = {};
		};

		$scope.delete = function(data) {
			var index = $scope.tableData.indexOf(data);
			if (index != -1) {
				$scope.tableData.splice(index, 1);
			}
		};

		$scope.showHideColumn = function(column) {
			var index = $scope.options.columns.indexOf(column);
			if(index == -1)
			{
				$scope.options.columns.push(column);
			}
			else
			{
				$scope.options.columns.splice(index, 1);
			}
		};

		$scope.addData = function() {
			$scope.tableData.push({
				'amount': Math.floor((Math.random() * 1000) + 1),
				'description': "Test Data",
				'date_added': new Date()
			});
		};

		$scope.currency = "Rs ";

		$scope.edit = function(data) {
			var modalInstance = $modal.open({
	            templateUrl: 'helper/EditData.html',
	            controller: 'EditController',
	            size: 'lg',
	            resolve: {
	              expense: function() {
	              	return data;
	              }
	            }
          });

		};

		$scope.options = {
			'columns' : ['amount', 'date_added', 'description'],
			'colDefs' : { 'date_added': {'filter': {'name': 'date', 'args': ['short']}, 
										 'displayName': 'Date Added'}, 
						  'amount': {'filter': {'name': 'currency', 'args': [$scope.currency]},
									 'displayName': 'Amount'},
						  'description': {'displayName': 'Description'}
						},
			'sortable': {'default':['-date_added'], 'columns': ['amount', 'date_added']},
			'search' : {'enable' : true, 'columns' : ['description', 'amount']},
			'limit' : 5,
			'filter': {'name':'customFilter', 'args':[]},
			'edit': {'enable': true, 'onEdit': $scope.edit},
			'delete': {'enable': true, 'onDelete': $scope.delete}
		};
	}])

	.controller('EditController', function($scope, $modalInstance, expense){
		console.log(expense);
		
		$scope.expense = expense;

		$scope.save = function() {
			$modalInstance.close($scope.expense);
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		};
	})

	.filter('customFilter', function($filter) {
		return function(input) {
			var output = $filter('filter')(input, function(data){
				return data.amount != 300;
			});
			return output;
		};
	});