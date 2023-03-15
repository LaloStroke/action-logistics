import React from 'react';
import Table from '../../components/Table';
import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AiFillEye } from 'react-icons/ai';
import { useParams } from 'react-router';
import Switch from '../../components/Switch';
import Select from '../../components/Select';
import SelectOption from '../../components/Select/SelectOption/SelectOption';
import Locations from '../../constants/Locations';

const Home: React.FC = (): JSX.Element => {
  const [inOperation, setInOperation] = useState<boolean>(false);
  const { selectedAssetOption } = useParams();

  const tbodyData: Assets[] = [
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

  const columns: ColumnDefinitionType<Assets, keyof Assets>[] = [
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

  const handleSwitch = (): void => {
    setInOperation(!inOperation);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between w-2/3 items-center	">
        <div className="w-2/3">
          <Input type="search" placeholder="Search" widthInDesktop="third" />
        </div>
        {selectedAssetOption === 'Operation' && (
          <>
            <span>Out Operation</span>
            <Switch handleChange={handleSwitch} id="inOperation" value={inOperation} />
            <span>In Operation</span>
          </>
        )}
        {selectedAssetOption === 'Location' && (
          <>
            <Select>
              {Locations.map((location) => (
                <SelectOption value={location} key={location}>
                  {location}
                </SelectOption>
              ))}
            </Select>
          </>
        )}
      </div>
      <div className="mt-8 flex justify-center">
        <Table columns={columns} data={tbodyData} />
      </div>
    </div>
  );
};

export default Home;
