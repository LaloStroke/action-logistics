import React, { useState, useRef, useEffect } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside";
import {
  setSidebarOpen,
  setAssetsSelected,
  setTransactionSelected,
  setConfigSelected,
  setCatalogSelected
} from "@/store/services/slice/appSlice";
import { useDispatch } from "react-redux";
import SelectOptions from "../../constants/selectOptions";
import "./sidebar.css";
import SelectOption from "../Select/SelectOption/SelectOption";
import Select from "../Select";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTractor } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { AiOutlineBook } from "react-icons/ai";
import { GrDocumentConfig } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

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

  const handleAssets = (value: Assets): void => {
    dispatch(setAssetsSelected(value));
  };
  const handleTransactions = (value: Transactions): void => {
    dispatch(setTransactionSelected(value));
  };
  const handleConfigs = (value: ConfigPoints): void => {
    dispatch(setConfigSelected(value));
  };
  const handleCatalogs = (value: CatalogPoints): void => {
    dispatch(setCatalogSelected(value));
  };

  const Assets = SelectOptions.get("Assets");
  const Transactions = SelectOptions.get("Transactions");
  const Configs = SelectOptions.get("ConfigPoints");
  const Catalogs = SelectOptions.get("CatalogPoints");
  useEffect(() => {
    dispatch(setSidebarOpen(isOpen));
  }, [isOpen]);
  return (
    <div ref={sidebarRef} onClick={handleOpen}>
      {isOpen ? (
        <div className="open">
          <div className="title">
            <RxHamburgerMenu />
            Action Logistics
          </div>
          <div className="select">
            <div>
              <Select
                defaultValue={"All Assets"}
                staticPlaceholder={"Assets"}
                selectHandler={handleAssets}
                placeholder="Assets"
                className="bg-primary rounded-md p-4 relative w-56 cursor-pointer border-none duration-300"
                optionsStyle="bg-primary list-none relative w-full left-0 top-4 bottom-22 overflow-auto h-36 rounded-md flex flex-col duration-300"
              >
                {(Assets as string[]).map((Assets) => (
                  <CustomLink
                    to={`/Assets/${Assets == "All Assets" ? "all" : Assets}`}
                    key={Assets}
                    isOpen={isOpen}
                  >
                    <SelectOption value={Assets}>{Assets}</SelectOption>
                  </CustomLink>
                ))}
              </Select>
            </div>
            <div>
              <Select
                defaultValue={"Due"}
                staticPlaceholder={"Transactions"}
                selectHandler={handleTransactions}
                placeholder="Transactions"
                className="bg-primary rounded-md p-4 relative w-56 cursor-pointer border-none duration-300"
                optionsStyle="bg-primary list-none relative w-full left-0 top-4 right-2 overflow-auto max-h-36 rounded-md flex flex-col duration-300"
              >
                {(Transactions as string[]).map((Transactions) => (
                  <CustomLink
                    to={`${
                      Transactions === "Swap Request" ||
                      Transactions === "Asset Return"
                        ? `create/Transactions/${Transactions}`
                        : `/Transactions/${Transactions}`
                    }`}
                    key={Transactions}
                    isOpen={isOpen}
                  >
                    <SelectOption value={Transactions}>
                      {Transactions}
                    </SelectOption>
                  </CustomLink>
                ))}
              </Select>
            </div>
            <div>
              <Select
                defaultValue={"Locations"}
                staticPlaceholder={"Catalogs"}
                selectHandler={handleCatalogs}
                placeholder="Catalogs"
                className="bg-primary rounded-md p-4 relative w-56 cursor-pointer border-none duration-300"
                optionsStyle="bg-prima list-none relative w-full left-0 top-4 right-2 overflow-auto max-h-36 rounded-md flex flex-col duration-300"
              >
                {(Catalogs as string[]).map((Catalogs) => (
                  <CustomLink
                    to={`/Catalogs/${Catalogs}`}
                    key={Catalogs}
                    isOpen={isOpen}
                  >
                    <SelectOption value={Catalogs}>{Catalogs}</SelectOption>
                  </CustomLink>
                ))}
              </Select>
            </div>
            <div>
              <Select
                defaultValue={"Locations"}
                staticPlaceholder={"Configs"}
                selectHandler={handleConfigs}
                placeholder="Configs"
                className="bg-primary rounded-md p-4 relative w-56 cursor-pointer border-none duration-300"
                optionsStyle="bg-primary list-none relative w-full left-0 top-4 right-2 overflow-auto max-h-36 rounded-md flex flex-col duration-300"
              >
                {(Configs as string[]).map((Configs) => (
                  <CustomLink
                    to={`/Configs/${Configs}`}
                    key={Configs}
                    isOpen={isOpen}
                  >
                    <SelectOption value={Configs}>{Configs}</SelectOption>
                  </CustomLink>
                ))}
              </Select>
            </div>
          </div>

          <Link to="/login">
            <button className="flex justify-center items-center bg-error rounded-md w-20 h-12 gap-x-2 text-sm ml-40 duration-300 ease-in">
              Logout
              <BiLogOut />
            </button>
          </Link>
        </div>
      ) : (
        <div className="close">
          <div className="flex justify-center items-center  rounded-ms duration-300 ease-in w-8 h-8 mx-auto mt-2">
            <RxHamburgerMenu />
          </div>
          <div className="select">
            <CustomLink to={`/Assets/`} isOpen={isOpen}>
              <FaTractor />
            </CustomLink>
            <CustomLink to="/Transactions/" isOpen={isOpen}>
              <GrTransaction />
            </CustomLink>
            <CustomLink to="/Catalogs/" isOpen={isOpen}>
              <AiOutlineBook />
            </CustomLink>
            <CustomLink to="/Configs/" isOpen={isOpen}>
              <GrDocumentConfig />
            </CustomLink>
          </div>
          <button className="flex justify-center items-center bg-error rounded-md duration-300 ease-in w-10 h-10 mx-auto mt-3">
            <BiLogOut />
          </button>
        </div>
      )}
    </div>
  );
};

const CustomLink: React.FC<{
  to: string;
  children: JSX.Element;
  className?: string;
  isOpen: boolean;
}> = ({ to, children, className, isOpen }) => {
  const resolvedPath = useResolvedPath(to as string);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div>
      {isOpen === true ? (
        <Link
          className={`${
            className ? className : "duration-300 w-28 h-full cursor-pointer"
          } `}
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
      ) : (
        <Link to={to}>
          <div
            className={`grid place-content-center cursor-pointer gap-4 w-8 h-8 ${
              isActive ? "bg-cyan-300" : ""
            }`}
          >
            {children}
          </div>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
