/**
*  Module
*
* Description
*/
angular.module('testModule', ['ui.datatable'])
	.controller('testController', ['$scope', function($scope){
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
				'date_added' : new Date('01-10-2014')
			},
			{
				'amount' : 100,
				'id' : 133,
				'date_added' : new Date('04-10-2014')
			},
			{
				'id' : 133,
				'amount' : 200,
				'date_added' : new Date('02-10-2014')
			},
			{
				'amount' : 300,
				'description': "my snaofboa",
				'id' : 133,
				'date_added' : new Date('03-10-2014')
			},
			{
				'amount' : 400,
				'date_added' : new Date('04-10-2014')
			},
			{
				'amount' : 100,
				'description': "test",
				'date_added' : new Date('01-10-2014')
			},
			{
				'amount' : 100,
				'date_added' : new Date('04-10-2014')
			},
			{
				'amount' : 200,
				'date_added' : new Date('02-10-2014')
			},
			{
				'amount' : 300,
				'description': "my snaofboa",
				'date_added' : new Date('03-10-2014')
			},
			{
				'amount' : 400,
				'date_added' : new Date('04-10-2014')
			},
			{
				'amount' : 100,
				'description': "test",
				'date_added' : new Date('01-10-2014')
			},
			{
				'amount' : 100,
				'date_added' : new Date('04-10-2014')
			},
			{
				'amount' : 200,
				'date_added' : new Date('02-10-2014')
			},
			{
				'amount' : 300,
				'description': "my snaofboa",
				'date_added' : new Date('03-10-2014')
			}
		];

		$scope.add = function(data) {
			$scope.tableData.push(data);
		};

		$scope.remove = function(data) {

		};

		$scope.options = {
			'columns' : ['amount', 'date_added', 'description'],
			'colDefs' : {'date_added': {'filter': {'name': 'date', 'args': ['short']} }, 'amount': {'filter': {'name': 'currency', 'args': ['Rs']}} },
			'sortable': {'default':['-date_added'], 'columns': ['amount', 'date_added']},
			'display_name': [{'amount': 'Amount'}, {'date_added': 'Date Added'}, {'description': 'Description'}],
			'filter' : {'enable' : true, 'columns' : ['description', 'amount']},
			'limit' : 5,
			'add' : {'enable' : true, 'function': $scope.add, 'required' : ['amount', 'date_added']}
		};
	}]);