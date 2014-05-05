Angular UI  - Datatable
=========================

## Usage:

```
<mg-table mg-data="tableData" mg-data-options=options></mg-table>
```

## Available Options

| Option | Type | Description |
|--------|------|:-------------|
|sortable| Array | list of columns that have sort enabled |
|display_name| Array of objects| Display name of each column. Each object is {column name: display Name } |
|filter| object | <ul> <li>enable</li> <li>columns</li></ul> |
|limit| integer | no of items to list per page |

## Example:

### Data: ###
```
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
  }];
```  

### Options: ###
```
$scope.options = {
  'sortable': ['amount', 'date_added'],
  'display_name': [{'amount': 'Amount'}, {'date_added': 'Date Added'}, {'description': 'Description'}],
  'filter' : {'enable' : true, 'columns' : ['description', 'amount']},
  'limit' : 5,
};
```
