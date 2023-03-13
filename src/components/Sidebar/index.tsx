import React, { useState, useRef, useEffect } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside";
import {
  setSidebarOpen,
  setAssetsSelected
} from "@/store/services/slice/appSlice";
import { useDispatch } from "react-redux";
import SelectOptions from "../../constants/selectOptions";
import "./sidebar.css";
import SelectOption from "../Select/SelectOption/SelectOption";
import Select from "../Select";

const Sidebar: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleOutsideOpen = () => {
    setIsOpen(false);
  };
  const sidebarRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(sidebarRef, handleOutsideOpen);

  const handleStyles = isOpen ? "open" : "close";
  const handleAssets = (value: Assets): void => {
    dispatch(setAssetsSelected(value));
  };
  const Assets = SelectOptions.get("Assets");
  useEffect(() => {
    dispatch(setSidebarOpen(isOpen));
  }, [isOpen]);
  console.log(isOpen, "isOpen");
  return (
    <div className={handleStyles} ref={sidebarRef} onClick={handleOpen}>
      Sidebar
      <div>
        <Select
          onHover
          defaultValue={"All Assets"}
          staticPlaceholder={"Assets"}
          selectHandler={handleAssets}
          placeholder="Assets"
          className="w-28 bg-transparent rounded-md py-4 px-2 relative cursor-pointer border-none h-full"
        >
          {(Assets as string[]).map((Assets) => (
            <SelectOption key={Assets} value={Assets}>
              {Assets}
            </SelectOption>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Sidebar;
