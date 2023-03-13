declare interface DefaultTableOptions {
  editable?: JSX.Element;
  deletable?: JSX.Element;
}

declare interface Logistics extends DefaultTableOptions {
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
