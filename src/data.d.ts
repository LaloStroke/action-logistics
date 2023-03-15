declare interface DefaultTableOptions {
  editable?: JSX.Element;
  deletable?: JSX.Element;
}

declare interface Assets extends DefaultTableOptions {
  ID: string;
  'S/N': string;
  name: string;
  manufacturer: string;
  Description: string;
  type: string;
  subtype: string;
  owner: string;
  location: string;
  'status operation': string;
  'status location': string;
}

declare interface Transactions extends DefaultTableOptions {
  'Exceded days': number;
  'Request date': string;
  'Return commit date': string;
  Requester: string;
  'Location Origin': string;
  'Location Destination': string;
  Authorized: string;
  'Authorization date': string;
  Assets: Assets['name'][];
}

declare interface TransactionsHeaders {
  due: Transactions;
}

declare interface Locations extends DefaultTableOptions {
  id: string;
  'Location Name': string;
  City: string;
  Address: string;
  'Zip Code': string;
  Status: string;
}

declare interface UsersCatalog extends DefaultTableOptions {
  id: string;
  name: string;
  'Last Lame': string;
  'Employee No': number;
  Email: string;
  Telephone: string;
  Location: string;
  Status: string | boolean;
}

declare interface ManufacturerCatalog extends DefaultTableOptions {
  id: string;
  Manufacturer: string;
  Description: string;
  'Total Assets': number;
}

declare interface EquipmentTypeCatalog extends DefaultTableOptions {
  id: string;
  'Equipment type': string;
  Description: string;
  'Total Assets': number;
}

declare interface SubEquipmentTypeCatalog extends EquipmentTypeCatalog {
  'Sub equipment type': string;
}

declare interface InsecureCompaniesCatalog extends DefaultTableOptions {
  id: string;
  Company: string;
  Description: string;
  'Total Assets': number;
}

declare interface InsuranceTypesCatalog extends DefaultTableOptions {
  id: string;
  'Insurence Type': string;
  Description: string;
  'Total Assets': number;
}

declare interface Catalogs {
  Locations: Locations;
  Users: UsersCatalog;
  Manufacturers: ManufacturerCatalog;
  'Equipment type': EquipmentTypeCatalog;
  'Equipment sub-type': SubEquipmentTypeCatalog;
  'Insecure Companies': InsecureCompaniesCatalog;
  'Insurance types': InsuranceTypesCatalog;
}
