Angular UI  - Datatable [![Build Status](https://travis-ci.org/Ema93sh/datatable.svg?branch=master)](https://travis-ci.org/Ema93sh/datatable)
=========================

## Usage:

```
<mg-table mg-data="tableData" mg-data-options=options></mg-table>
```

## Available Options

| Option | Type | Description |
|--------|------|:-------------|
|columns| Array | list of columns to be displayed. If specified others will be ignored|
|colDefs| object | <ul><li>filter: apply filter to each cell of the column</li></ul>|
|sortable| Array | list of columns that have sort enabled |
|display_name| Array of objects| Display name of each column. Each object is {column name: display Name } |
|filter| object | <ul> <li>enable</li> <li>columns</li></ul> |
|limit| integer | no of items to list per page |

## Example:

### Data: ###
```
$scope.tableData = [
  {
    'amount' : 400,
    'date_added' : new Date('04-10-2014')
    'id': 1
  },
  {
    'amount' : 100,
    'description': "test",
    'date_added' : new Date('01-10-2014'),
    'id': 2
  },
  {
    'id': 3,
    'amount' : 100,
    'date_added' : new Date('04-10-2014')
  },
  {
    'amount' : 200,
    'date_added' : new Date('02-10-2014')
  }];
```  

### Options: ###
```
$scope.options = {
  'columns': ['amount', 'date_added', 'description'],
  'colDefs': {'amount': {'filter': {'name': 'currency', 'args':['Rs']}},
              'date_added': {'filter': {'name': 'date', 'args':['short']}}
             },
  'sortable': ['amount', 'date_added'],
  'display_name': [{'amount': 'Amount'}, {'date_added': 'Date Added'}, {'description': 'Description'}],
  'filter' : {'enable' : true, 'columns' : ['description', 'amount']},
  'limit' : 5,
};
```
