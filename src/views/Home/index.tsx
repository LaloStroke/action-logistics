import React from "react";
import Table from "../../components/Table";
import Navbar from "../../components/Navbar";
import Select from "../../components/Select";
import SelectOption from "../../components/Select/SelectOption/SelectOption";
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

  const tbodyData = [
    {
      id: "1",
      items: [
        "23465",
        "817367HS",
        "Forklift",
        "Toyota",
        "Lorem Ipsum",
        "Type",
        "Sub-type",
        "John Doe",
        "Irving, TX",
        "In Operation",
        "On Partner"
      ]
    },
    {
      id: "2",
      items: [
        "89234",
        "L29384ECS",
        "Forklift",
        "CAT",
        "Lorem Ipsum",
        "Type",
        "Sub-type",
        "John Doe",
        "Nashville, TN",
        "In Operation",
        "Original Location"
      ]
    }
  ];
  const assetsPoints = ["All Assets", "Operation", "Location"];
  const handleSelect = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <>
      <Layout>
        <Input type="search" placeholder="Search" />
        <Select placeholder="" selectHandler={handleSelect}>
          {assetsPoints.map((assetsPoints) => (
            <SelectOption key={assetsPoints} value={assetsPoints}>
              {assetsPoints}
            </SelectOption>
          ))}
        </Select>
        <Table theadData={theadData} tbodyData={tbodyData} />
      </Layout>
    </>
  );
};

export default Home;
