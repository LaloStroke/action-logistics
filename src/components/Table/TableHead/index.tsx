import React from "react";

const TableHeadItem: React.FC<{ item: string }> = ({ item }): JSX.Element => {
  return (
    <td
      title={item}
      className="font-bold truncate text-center border-r-2 border-b-2 border-black text-sm"
    >
      {item}
    </td>
  );
};

export default TableHeadItem;
