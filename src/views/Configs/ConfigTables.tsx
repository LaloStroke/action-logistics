import React from 'react';
import Table from '../../components/Table';
import Input from '../../components/Input';
import { useParams } from 'react-router';
import Button from '../../components/Button';
import { ConfigsBody, ConfigsColumns } from '../../constants/Tables/Configs';

const ConfigTables: React.FC = (): JSX.Element => {
  const { selectedConfigOption } = useParams();

  return (
    <div className="p-4">
      <div className="flex justify-between w-4/6 items-center gap-4">
        <Input type="search" placeholder="Search" />
        <Button type="secondary" href={`/create/Configs/${selectedConfigOption}/1234`}>
          Create new {selectedConfigOption?.toLowerCase() || 'location'}
        </Button>
      </div>
      <div className="mt-8 flex justify-center ">
        <Table
          columns={ConfigsColumns.get(selectedConfigOption || 'Locations')!}
          data={ConfigsBody.get(selectedConfigOption || 'Locations')!}
        />
      </div>
    </div>
  );
};

export default ConfigTables;
