const TableHeader = <T, K extends keyof T>({
  columns
}: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    const style = {
      width: column.width ?? 100,
      borderBottom: "2px solid black"
    };

    return (
      <th key={`headCell-${index}`} style={style}>
        {column.header}
      </th>
    );
  });

  return (
    <thead className="border border-spacing-4">
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
