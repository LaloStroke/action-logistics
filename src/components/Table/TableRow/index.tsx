import React from "react";

const TableRows = <T, K extends keyof T>({
  data,
  columns
}: TableRowsProps<T, K>): JSX.Element => {
  const rows = data.map((row, index) => {
    return (
      <tr className="h-12" key={`row-${index}`}>
        {columns.map((column, index2) => {
          return (
            <td className="h-12 p-2" key={`cell-${index2}`}>
              {row[column.key] as React.ReactNode | React.ReactNode[]}
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody className="h-12">{rows}</tbody>;
};

export default TableRows;
