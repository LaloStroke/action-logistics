import React from "react";
import Table from "../../components/Table";
import { useState } from "react";
import Input from "../../components/Input";
import Layout from "../../components/Layout";

const Home: React.FC = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const theadData = [
    "Status Operation",
    "ID",
    "S/N",
    "Name",
    "Manufacturer",
    "Desc",
    "Type",
    "Sub-type",
    "Owner",
    "Location",
    "Status Location"
  ];

  const tbodyData: Logistics[] = [
    {
      Address: "1234 Main St",
      City: "Anytown",
      ID: "1234",
      State: "CA",
      Assets: "All Assets",
      Location: "All Locations",
      LocationName: "All Locations",
      TotalAssets: 1234,
      ZipCode: 12345,
      editable: <button>Edit</button>,
      deletable: <button>Delete</button>
    }
  ];

  const columns: ColumnDefinitionType<Logistics, keyof Logistics>[] = [
    {
      key: "ID",
      header: "ID",
      width: 150
    },
    {
      key: "Address",
      header: "Address"
    },
    {
      key: "City",
      header: "City"
    },
    {
      key: "State",
      header: "State"
    },
    {
      key: "editable",
      header: "Edit"
    },
    {
      key: "deletable",
      header: "Delete"
    }
  ];

  return (
    <>
      <Layout>
        <Input type="search" placeholder="Search" />
        <Table columns={columns} data={tbodyData} />
      </Layout>
    </>
  );
};

export default Home;
