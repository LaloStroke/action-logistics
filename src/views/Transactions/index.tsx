import React from 'react';
import Table from '../../components/Table';
import { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AiFillEye } from 'react-icons/ai';

const Transactions: React.FC = (): JSX.Element => {
  const [inOperation, setInOperation] = useState<boolean>(false);

  const tbodyData: TransactionsHeaders['due'][] = [
    {
      'Authorization date': '2021-08-01',
      'Exceded days': 1,
      'Location Destination': 'Huston - Texas',
      'Location Origin': 'Huston - Texas',
      'Request date': '2021-08-01',
      'Return commit date': '2021-08-01',
      Assets: ['asset 1', 'asset 2', 'asset 3'],
      Authorized: 'Authorized',
      Requester: 'Requester',
      editable: (
        <Button type="secondary" href="/edit/Transactions/1233">
          <AiFillEye />
        </Button>
      ),
    },
  ];

  const columns: ColumnDefinitionType<
    TransactionsHeaders['due'],
    keyof TransactionsHeaders['due']
  >[] = [
    {
      header: 'Exceded days',
      key: 'Exceded days',
    },
    {
      key: 'Request date',
      header: 'Request date',
    },
    {
      key: 'Return commit date',
      header: 'Return commit date',
    },
    {
      header: 'Requester',
      key: 'Requester',
    },
    {
      key: 'Location Origin',
      header: 'Location Origin',
    },
    {
      key: 'Location Destination',
      header: 'Location Destination',
    },
    {
      key: 'Authorized',
      header: 'Authorized',
    },
    {
      key: 'Authorization date',
      header: 'Authorization date',
    },
    {
      key: 'Assets',
      header: 'Assets',
    },
    {
      key: 'editable',
      header: 'View',
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
      </div>
      <div className="mt-8 flex justify-center">
        <Table columns={columns} data={tbodyData} />
      </div>
    </div>
  );
};

export default Transactions;
