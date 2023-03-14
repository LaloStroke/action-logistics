import React from 'react';
import Table from '../../components/Table';
import Input from '../../components/Input';
import { useParams } from 'react-router';
import { CatalogsBody, ColumnsCatalogs } from '../../constants/Tables/Catalogs';
import Button from '../../components/Button';

const CatalogsTable: React.FC = (): JSX.Element => {
  const { selectedCatalogOption } = useParams();

  return (
    <div className="p-4">
      <div className="flex justify-between w-4/6 items-center gap-4">
        <Input type="search" placeholder="Search" />
        <Button type="secondary" href={`/create/Catalogs/${selectedCatalogOption}/1234`}>
          Create new {selectedCatalogOption?.toLowerCase() || 'location'}
        </Button>
      </div>
      <div className="mt-8 flex justify-center">
        <Table
          columns={ColumnsCatalogs.get(selectedCatalogOption || 'Locations')!}
          data={CatalogsBody.get(selectedCatalogOption || 'Locations')!}
        />
      </div>
    </div>
  );
};

export default CatalogsTable;
