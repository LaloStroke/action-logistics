import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Select from "../Select";
import { useSetLocationMutation } from "../../store/services/userService";
import SelectOption from "../Select/SelectOption/SelectOption";
import { useDispatch } from "react-redux";
import {
  setCatalogSelected,
  setConfigSelected,
  setTransactionSelected,
  setAssetsSelected
} from "@/store/services/slice/appSlice";
import OptionsMobile from "../OptionsMobile";

const Navbar: React.FC = (): JSX.Element => {
  const [setLocation, { isError, isSuccess, isLoading }] =
    useSetLocationMutation();
  const dispatch = useDispatch();
  const [isOpenOptionsMobile, setIsOpenOptionsMobile] =
    useState<boolean>(false);
  const catalogPoints: Array<CatalogPoints> = [
    "Locations",
    "Users",
    "Manufacturers",
    "Equipment Type",
    "Equipment SubType",
    "Insurances companies",
    "Insurance types"
  ];
  const configPoints: Array<ConfigPoints> = [
    "Locations",
    "Assets",
    "Workflows"
  ];

  const Transactions: Array<Transactions> = [
    "Due",
    "All",
    "Swap Request",
    "Asset Return"
  ];

  const Assets: Array<Assets> = ["All Assets", "Operation", "Location"];

  const handleSelect = (value: CatalogPoints): void => {
    dispatch(setCatalogSelected(value));
  };
  const handleSelectConfig = (value: ConfigPoints): void => {
    dispatch(setConfigSelected(value));
  };
  const handleTransaction = (value: Transactions): void => {
    dispatch(setTransactionSelected(value));
  };
  const handleAssets = (value: Assets): void => {
    dispatch(setAssetsSelected(value));
  };
  return (
    <header className="flex bg-orange items-center justify-between px-2 h-12 ">
      <Link to={"/home"} className="w-36">
        <h1 className="font-bold tracking-wide">Action Logistics</h1>
      </Link>
      <nav className="hidden px-2 gap-4 h-full md:flex md:items-center">
        <CustomLink to="/Home">
          <Select
            onHover
            defaultValue={"All Assets"}
            staticPlaceholder={"Assets"}
            selectHandler={handleAssets}
            placeholder="Assets"
            className="w-28 bg-transparent rounded-md py-4 px-2 relative cursor-pointer border-none h-full"
          >
            {Assets.map((Assets) => (
              <SelectOption key={Assets} value={Assets}>
                {Assets}
              </SelectOption>
            ))}
          </Select>
        </CustomLink>

        <CustomLink to="/Transactions" className="duration-300 w-36 h-full">
          <Select
            onHover
            defaultValue={"Due"}
            staticPlaceholder={"Transactions"}
            selectHandler={handleTransaction}
            placeholder="Transactions"
            className="w-28 bg-transparent rounded-md py-4 px-2 relative cursor-pointer border-none h-full"
          >
            {Transactions.map((Transactions) => (
              <SelectOption key={Transactions} value={Transactions}>
                {Transactions}
              </SelectOption>
            ))}
          </Select>
        </CustomLink>

        <CustomLink to="/create/Catalogs/Locations">
          <Select
            onHover
            defaultValue={"Locations"}
            staticPlaceholder={"Catalogs"}
            selectHandler={handleSelect}
            placeholder="Catalogs"
            className="w-28 bg-transparent rounded-md py-4 px-2 relative cursor-pointer border-none h-full"
          >
            {catalogPoints.map((catalogPoints) => (
              <SelectOption key={catalogPoints} value={catalogPoints}>
                <Link
                  to={`/create/Catalogs/${catalogPoints.replace(/\s/g, "")}`}
                >
                  {catalogPoints}
                </Link>
              </SelectOption>
            ))}
          </Select>
        </CustomLink>

        <CustomLink to="/Configs">
          <Select
            onHover
            defaultValue={"Locations"}
            staticPlaceholder={"Configs"}
            selectHandler={handleSelectConfig}
            placeholder="Configs"
            className="w-20 bg-transparent rounded-md py-4 px-2 relative cursor-pointer border-none h-full"
          >
            {configPoints.map((configPoints) => (
              <SelectOption key={configPoints} value={configPoints}>
                {configPoints}
              </SelectOption>
            ))}
          </Select>
        </CustomLink>
      </nav>

      <button
        className="sm:hidden"
        onClick={() => setIsOpenOptionsMobile(!isOpenOptionsMobile)}
      >
        <GiHamburgerMenu />
      </button>

      {isOpenOptionsMobile && (
        <OptionsMobile onClose={setIsOpenOptionsMobile} />
      )}
    </header>
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

export default Navbar;
