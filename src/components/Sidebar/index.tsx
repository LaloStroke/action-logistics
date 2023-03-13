import React, { useState, useRef, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
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
            <CustomLink to={`/Assets/${Assets == "All Assets" ? "" : Assets}`}>
              <SelectOption key={Assets} value={Assets}>
                {Assets}
              </SelectOption>
            </CustomLink>
          ))}
        </Select>
      </div>
    </div>
  );
};

const CustomLink: React.FC<{
  to: string;
  children: JSX.Element;
  className?: string;
}> = ({ to, children, className }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link
      className={`${className ? className : "duration-300 w-28 h-full"} `}
      to={to}
    >
      <div
        className={`grid place-content-center px-4 h-full duration-300 cursor-pointer  ${
          isActive
            ? "bg-lightOrange duration-300 font-bold hover:tracking-normal"
            : ""
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Sidebar;
