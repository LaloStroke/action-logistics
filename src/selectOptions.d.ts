declare type CatalogPoints =
  | 'Locations'
  | 'Users'
  | 'Manufacturers'
  | 'Equipment Type'
  | 'Equipment SubType'
  | 'Insurances companies'
  | 'Insurance types';

declare type ConfigPoints = 'Locations' | 'Assets' | 'Workflows';

declare type Transactions = 'Due' | 'All' | 'Swap Request' | 'Asset Return';

declare type Assets = 'All Assets' | 'Operation' | 'Location';

declare type Forms =
  | 'Locations'
  | 'Users'
  | 'Manufacturers'
  | 'Equipment-type'
  | 'Equipment-subType'
  | 'Insurances-companies'
  | 'Insurance-types'
  | 'login';

declare type SelectOptions = 'Assets' | 'Transactions' | 'CatalogPoints' | 'ConfigPoints';
