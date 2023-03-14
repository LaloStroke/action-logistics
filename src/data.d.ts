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
