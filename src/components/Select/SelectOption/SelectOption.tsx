import React, { ReactNode } from "react";
import { useSelectContext } from "../SelectContext";

const SelectOption: React.FC<{
  value: string;
  children: ReactNode | ReactNode[];
}> = ({ value, children }): JSX.Element => {
  const { changeSelectedOption } = useSelectContext();

  return (
    <li
      className="cursor-pointer duration-300 grid place-items-center text-sm text-left rounded-md py-2 px-4 hover:tracking-tighter hover:bg-secondary"
      onClick={() => changeSelectedOption(value)}
    >
      {children}
    </li>
  );
};

export default SelectOption;
