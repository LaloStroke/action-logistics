import React from "react";

const TableRow: React.FC<{ data: DataTable }> = ({ data }): JSX.Element => {
  const propValues = Object.values(data);
  return (
    <tr>
      {propValues.map((item) => {
        return (
          <td
            key={item as number}
            className="truncate text-center border-r border-black text-xs"
          >
            {item}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
