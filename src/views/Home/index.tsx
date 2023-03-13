import React from 'react';
import Table from '../../components/Table';
import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Home: React.FC = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const tbodyData: Logistics[] = [
    {
      Address: '1234 Main St',
      City: 'Anytown',
      ID: '1234',
      State: 'CA',
      Assets: 'All Assets',
      Location: 'All Locations',
      LocationName: 'All Locations',
      TotalAssets: 1234,
      ZipCode: 12345,
      editable: (
        <Button type="secondary" href="/edit/Catalogs/Locations/1234">
          Edit
        </Button>
      ),
    },
  ];

  const columns: ColumnDefinitionType<Logistics, keyof Logistics>[] = [
    {
      key: 'ID',
      header: 'ID',
      width: 150,
    },
    {
      key: 'Address',
      header: 'Address',
    },
    {
      key: 'City',
      header: 'City',
    },
    {
      key: 'State',
      header: 'State',
    },
    {
      key: 'editable',
      header: 'Edit',
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
