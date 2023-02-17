import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <header className="flex bg-orange items-center justify-between px-2 h-12 w-full">
      <Link to={"/home"} className="w-36">
        <h1 className="font-bold tracking-wide">Action Logistics</h1>
      </Link>
      <nav className="hidden p-2 gap-4 h-full md:flex md:items-center">
        <CustomLink to="/Home">
          <h1>Assets</h1>
        </CustomLink>

        <CustomLink to="/Transactions">
          <h1>Transactions</h1>
        </CustomLink>

        <CustomLink to="/Catalogs">
          <h1>Catalogs</h1>
        </CustomLink>

        <CustomLink to="/Configs">
          <h1>Configs</h1>
        </CustomLink>
      </nav>

      <button className="sm:hidden">
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

const CustomLink: React.FC<{ to: string; children: JSX.Element }> = ({
  to,
  children
}) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <Link className="h-full duration-300 w-28" to={to}>
      <div
        className={`grid rounded-md place-content-center px-4 h-full duration-300 cursor-pointer hover:tracking-wider ${
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
