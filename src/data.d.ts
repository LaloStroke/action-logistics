declare interface DefaultTableOptions {
  editable?: JSX.Element;
  deletable?: JSX.Element;
}

declare interface Logistics extends DefaultTableOptions {
  ID: string;
  State: string;
  Address: string;
  Location: string;
  LocationName: string;
  City: string;
  ZipCode: number;
  Assets: string;
  TotalAssets: number;
}
