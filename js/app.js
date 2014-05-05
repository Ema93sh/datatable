/**
*  Module
*
* Description
*/
angular.module('testModule', ['ui.datatable'])
	.controller('testController', ['$scope', function($scope){
		$scope.tableData = [
			{
				'amount' : 'Rs400',
				'date_added' : new Date('04-10-2014')
			},
			{
				'amount' : 'Rs100',
				'description': "test",
				'date_added' : new Date('01-10-2014')
			},
			{
				'amount' : 'Rs100',
				'date_added' : new Date('04-10-2014')
			},
			{
				'amount' : 'Rs200',
				'date_added' : new Date('02-10-2014')
			},
			{
				'amount' : 'Rs300',
				'description': "my snaofboa",
				'date_added' : new Date('03-10-2014')
			},
			{
				'amount' : 'Rs400',
				'date_added' : new Date('04-10-2014')
			},
			{
				'amount' : 'Rs100',
				'description': "test",
				'date_added' : new Date('01-10-2014')
			},
			{
				'amount' : 'Rs100',
				'date_added' : new Date('04-10-2014')
			},
			{
				'amount' : 'Rs200',
				'date_added' : new Date('02-10-2014')
			},
			{
				'amount' : 'Rs300',
				'description': "my snaofboa",
				'date_added' : new Date('03-10-2014')
			},
			{
				'amount' : 'Rs400',
				'date_added' : new Date('04-10-2014')
			},
			{
				'amount' : 'Rs100',
				'description': "test",
				'date_added' : new Date('01-10-2014')
			},
			{
				'amount' : 'Rs100',
				'date_added' : new Date('04-10-2014')
			},
			{
				'amount' : 'Rs200',
				'date_added' : new Date('02-10-2014')
			},
			{
				'amount' : 'Rs300',
				'description': "my snaofboa",
				'date_added' : new Date('03-10-2014')
			},
			
		];

		$scope.options = {
			'sortable': ['amount', 'date_added'],
			'display_name': [{'amount': 'Amount'}, {'date_added': 'Date Added'}, {'description': 'Description'}],
			'filter' : {'enable' : true, 'columns' : ['description', 'amount']},
			'limit' : 5,
		};
	}]);