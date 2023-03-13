import React from "react";
import TableHeader from "./TableHead";
import TableRows from "./TableRow";

const Table = <T, K extends keyof T>({
  data,
  columns
}: TableProps<T, K>): JSX.Element => {
  return (
    <table className="h-full">
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  );
};

export default Table;
