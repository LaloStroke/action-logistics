import React, { useRef, useState, useEffect, ReactNode } from "react";
import { SelectContext } from "./SelectContext";
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside";
import { IoMdArrowDropup } from "react-icons/io";

const Select: React.FC<{
  children: ReactNode | ReactNode[];
  defaultValue?: string;
  placeholder?: string;
  onHover?: boolean;
  staticPlaceholder?: string;
  selectHandler?: (values: any) => void;
  className?: string;
  optionsStyle?: string;
}> = ({
  children,
  className,
  selectHandler,
  staticPlaceholder,
  defaultValue,
  onHover,
  optionsStyle,
  placeholder
}): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>(
    defaultValue || ""
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const selectPlaceHolder = placeholder || "Select an option";
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => setIsOpen(false);

  useOnClickOutside(selectRef, handleClickOutside);
  const updateSelectedOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  useEffect(() => {
    if (selectedOption && selectHandler) {
      selectHandler(selectedOption);
    }
  }, [selectHandler, selectedOption]);

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div
        className={
          className
            ? className
            : "bg-yellow rounded-md p-4 relative w-56 cursor-pointer border-none"
        }
        onClick={handleIsOpen}
        ref={selectRef}
      >
        <span className="flex h-full justify-between items-center">
          {staticPlaceholder
            ? staticPlaceholder
            : selectedOption || selectPlaceHolder}
          <div
            className={`duration-300 scale-125 ${isOpen ? "" : "rotate-180"}`}
          >
            <IoMdArrowDropup />
          </div>
        </span>
        {isOpen && (
          <ul
            className={`${
              optionsStyle
                ? optionsStyle
                : "bg-yellow list-none relative w-48 flex flex-col right-[-2.5rem] top-[3.25rem]"
            }`}
          >
            {children}
          </ul>
        )}
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
