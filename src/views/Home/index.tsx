import React from 'react';
import Table from '../../components/Table';
import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AiFillEye } from 'react-icons/ai';

const Home: React.FC = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const tbodyData: Logistics[] = [
    {
      ID: '1',
      'S/N': '1',
      name: 'name',
      manufacturer: 'manufacturer',
      Description: 'Description',
      type: 'type',
      subtype: 'subtype',
      owner: 'owner',
      location: 'location',
      'status operation': 'status operation',
      'status location': 'status location',
      editable: (
        <Button type="secondary" href="/edit/Catalogs/Locations/1233">
          <AiFillEye />
        </Button>
      ),
    },
    {
      ID: '1',
      'S/N': '1',
      name: 'name',
      manufacturer: 'manufacturer',
      Description: 'Description',
      type: 'type',
      subtype: 'subtype',
      owner: 'owner',
      location: 'location',
      'status operation': 'status operation',
      'status location': 'status location',
      editable: (
        <Button type="secondary" href="/edit/Catalogs/Locations/1234">
          <AiFillEye />
        </Button>
      ),
    },
    {
      ID: '1',
      'S/N': '1',
      name: 'name',
      manufacturer: 'manufacturer',
      Description: 'Description',
      type: 'type',
      subtype: 'subtype',
      owner: 'owner',
      location: 'location',
      'status operation': 'status operation',
      'status location': 'status location',
      editable: (
        <Button type="secondary" href="/edit/Catalogs/Locations/1232">
          <AiFillEye />
        </Button>
      ),
    },
  ];

  const columns: ColumnDefinitionType<Logistics, keyof Logistics>[] = [
    {
      key: 'ID',
      header: 'ID',
      width: 70,
    },
    {
      key: 'S/N',
      header: 'S/N',
      width: 70,
    },
    {
      key: 'name',
      header: 'Name',
      width: 70,
    },
    {
      key: 'manufacturer',
      header: 'Manufacturer',
    },
    {
      key: 'Description',
      header: 'Description',
    },
    {
      key: 'type',
      header: 'Type',
      width: 70,
    },
    {
      key: 'subtype',
      header: 'Sub Type',
      width: 70,
    },
    {
      key: 'owner',
      header: 'Owner',
      width: 70,
    },
    {
      key: 'location',
      header: 'Location',
      width: 70,
    },
    {
      key: 'status operation',
      header: 'Status Operation',
      width: 70,
    },
    {
      key: 'status location',
      header: 'Status Location',
      width: 70,
    },
    {
      key: 'editable',
      header: 'view',
    },
  ];

  return (
    <div className="p-4">
      <Input type="search" placeholder="Search" widthInDesktop="third" />
      <div className="mt-8 flex justify-center">
        <Table columns={columns} data={tbodyData} />
      </div>
    </div>
  );
};

export default Home;
