import Button from '../../../components/Button';
import { AiFillEye } from 'react-icons/ai';

// BODY DATA

const TbodyDataLocations: Configs['Locations'][] = [
  {
    id: '1',
    'Associated Assets': 13,
    Location: ['Location 1', 'Location 2', 'Location 3'],
    Owner: ['Owner 1', 'Owner 2', 'Owner 3'],
    Sections: ['Section 1', 'Section 2', 'Section 3'],
    SelectedLocation: 'Location 1',
    SectionLength: 3,
    editable: (
      <Button type="secondary" href="/edit/Configs/Locations/123456">
        <AiFillEye />
      </Button>
    ),
  },
];

const TbodyAssets: Configs['Assets'][] = [
  {
    id: '1',
    'Action Logistics ID': '123456',
    'Asset Type': ['Asset Type 1', 'Asset Type 2', 'Asset Type 3'],
    'Add date': '2021-01-01',
    'Asset Owner': ['Asset Owner 1', 'Asset Owner 2', 'Asset Owner 3'],
    'Asset Status': 'Active',
    'Asset Subtype': ['Asset Subtype 1', 'Asset Subtype 2', 'Asset Subtype 3'],
    'Buy date': '2021-01-01',
    'CAPEX/OPEX': 'CAPEX',
    'Insurance Type': ['Insurance Type 1', 'Insurance Type 2', 'Insurance Type 3'],
    'Location Status': 'Active',
    'Manufacture warranty': [
      'Manufacture warranty 1',
      'Manufacture warranty 2',
      'Manufacture warranty 3',
    ],
    'Model Date': '2021-01-01',
    'Parent Asset': ['Parent Asset 1', 'Parent Asset 2', 'Parent Asset 3'],
    'Serial Number': '123456',
    Asset: 'Asset 1',
    Author: 'Author 1',
    CAPPEX: 'CAPPEX 1',
    Insurence: 'Insurence 1',
    Location: ['Location 1', 'Location 2', 'Location 3'],
    Manufacturer: ['Manufacturer 1', 'Manufacturer 2', 'Manufacturer 3'],
    Model: 'Model 1',
    Section: ['Section 1', 'Section 2', 'Section 3'],
    editable: (
      <Button type="secondary" href="/edit/Configs/Assets/123456">
        <AiFillEye />
      </Button>
    ),
  },
  {
    id: '1',
    'Action Logistics ID': '123456',
    'Asset Type': ['Asset Type 1', 'Asset Type 2', 'Asset Type 3'],
    'Add date': '2021-01-01',
    'Asset Owner': ['Asset Owner 1', 'Asset Owner 2', 'Asset Owner 3'],
    'Asset Status': 'Active',
    'Asset Subtype': ['Asset Subtype 1', 'Asset Subtype 2', 'Asset Subtype 3'],
    'Buy date': '2021-01-01',
    'CAPEX/OPEX': 'CAPEX',
    'Insurance Type': ['Insurance Type 1', 'Insurance Type 2', 'Insurance Type 3'],
    'Location Status': 'Active',
    'Manufacture warranty': [
      'Manufacture warranty 1',
      'Manufacture warranty 2',
      'Manufacture warranty 3',
    ],
    'Model Date': '2021-01-01',
    'Parent Asset': ['Parent Asset 1', 'Parent Asset 2', 'Parent Asset 3'],
    'Serial Number': '123456',
    Asset: 'Asset 1',
    Author: 'Author 1',
    CAPPEX: 'CAPPEX 1',
    Insurence: 'Insurence 1',
    Location: ['Location 1', 'Location 2', 'Location 3'],
    Manufacturer: ['Manufacturer 1', 'Manufacturer 2', 'Manufacturer 3'],
    Model: 'Model 1',
    Section: ['Section 1', 'Section 2', 'Section 3'],
    editable: (
      <Button type="secondary" href="/edit/Configs/Assets/123456">
        <AiFillEye />
      </Button>
    ),
  },
  {
    id: '1',
    'Action Logistics ID': '123456',
    'Asset Type': ['Asset Type 1', 'Asset Type 2', 'Asset Type 3'],
    'Add date': '2021-01-01',
    'Asset Owner': ['Asset Owner 1', 'Asset Owner 2', 'Asset Owner 3'],
    'Asset Status': 'Active',
    'Asset Subtype': ['Asset Subtype 1', 'Asset Subtype 2', 'Asset Subtype 3'],
    'Buy date': '2021-01-01',
    'CAPEX/OPEX': 'CAPEX',
    'Insurance Type': ['Insurance Type 1', 'Insurance Type 2', 'Insurance Type 3'],
    'Location Status': 'Active',
    'Manufacture warranty': [
      'Manufacture warranty 1',
      'Manufacture warranty 2',
      'Manufacture warranty 3',
    ],
    'Model Date': '2021-01-01',
    'Parent Asset': ['Parent Asset 1', 'Parent Asset 2', 'Parent Asset 3'],
    'Serial Number': '123456',
    Asset: 'Asset 1',
    Author: 'Author 1',
    CAPPEX: 'CAPPEX 1',
    Insurence: 'Insurence 1',
    Location: ['Location 1', 'Location 2', 'Location 3'],
    Manufacturer: ['Manufacturer 1', 'Manufacturer 2', 'Manufacturer 3'],
    Model: 'Model 1',
    Section: ['Section 1', 'Section 2', 'Section 3'],
    editable: (
      <Button type="secondary" href="/edit/Configs/Assets/123456">
        <AiFillEye />
      </Button>
    ),
  },
];
// COLUMN DEFINITIONS

const ColumnsLocations: ColumnDefinitionType<LocationsConfig, keyof LocationsConfig>[] = [
  {
    header: 'ID',
    key: 'id',
  },
  {
    header: 'Location',
    key: 'SelectedLocation',
  },
  {
    header: 'Sections',
    key: 'SectionLength',
  },
  {
    header: 'View',
    key: 'editable',
  },
];

const ColumnsAssets: ColumnDefinitionType<AssetsConfig, keyof AssetsConfig>[] = [
  {
    header: 'ID',
    key: 'id',
  },
  {
    header: 'Author',
    key: 'Author',
  },
  {
    header: 'Asset Status',
    key: 'Asset Status',
  },
  {
    key: 'Location Status',
    header: 'Location Status',
  },
  {
    key: 'Add date',
    header: 'Add date',
  },
  {
    key: 'Model Date',
    header: 'Model Date',
  },
  {
    key: 'Serial Number',
    header: 'Serial Number',
  },
  {
    key: 'Action Logistics ID',
    header: 'Action Logistics ID',
  },
  {
    key: 'CAPEX/OPEX',
    header: 'CAPEX/OPEX',
  },
  {
    key: 'CAPPEX',
    header: 'CAPPEX',
  },
  {
    key: 'Asset',
    header: 'Asset',
  },
  {
    key: 'Manufacturer',
    header: 'Manufacturer',
  },
  {
    key: 'Model',
    header: 'Model',
  },
  {
    key: 'Asset Type',
    header: 'Asset Type',
  },
  {
    key: 'Asset Subtype',
    header: 'Asset Subtype',
  },
  {
    key: 'Location',
    header: 'Location',
  },
  {
    key: 'Asset Owner',
    header: 'Asset Owner',
  },
  {
    key: 'Section',
    header: 'Section',
  },
  {
    key: 'Parent Asset',
    header: 'Parent Asset',
  },
  {
    key: 'Buy date',
    header: 'Buy date',
  },
  {
    key: 'Manufacture warranty',
    header: 'Manufacture warranty',
  },
  {
    key: 'Insurence',
    header: 'Insurence',
  },
  {
    key: 'Insurance Type',
    header: 'Insurance Type',
  },
  {
    key: 'editable',
    header: 'View',
  },
];

// TABLE DATA
export const ConfigsBody: Map<any, any> = new Map<any, any>([
  ['Locations', TbodyDataLocations],
  ['Assets', TbodyAssets],
]);

// TABLE COLUMNS
export const ConfigsColumns: Map<any, any> = new Map<any, any>([
  ['Locations', ColumnsLocations],
  ['Assets', ColumnsAssets],
]);
