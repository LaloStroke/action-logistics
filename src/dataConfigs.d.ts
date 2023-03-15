declare interface LocationsConfig extends DefaultTableOptions {
  id: string;
  Location: Array<string>;
  Owner: Array<string>;
  SectionLength?: number;
  SelectedLocation?: string;
  Sections: Array<string>;
  'Associated Assets': number;
}

declare interface AssetsConfig extends DefaultTableOptions {
  id: string;
  Author: string;
  'Asset Status': string;
  'Location Status': string;
  'Add date': string;
  'Model Date': string;
  'Serial Number': string;
  'Action Logistics ID': string;
  'CAPEX/OPEX': string;
  CAPPEX: string;
  Asset: string;
  Manufacturer: Array<string>;
  Model: string;
  'Asset Type': Array<string>;
  'Asset Subtype': Array<string>;
  Location: Array<string>;
  'Asset Owner': Array<string>;
  Section: Array<string>;
  'Parent Asset': Array<string>;
  'Buy date': string;
  'Manufacture warranty': Array<string>;
  Insurence: string;
  'Insurance Type': Array<string>;
}

declare interface Configs {
  Locations: LocationsConfig;
  Assets: AssetsConfig;
}
