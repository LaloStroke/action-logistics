import React from "react";
import Navbar from "../Navbar";

const Layout: React.FC<{ children: JSX.Element[] }> = ({
  children
}): JSX.Element => {
  return (
    <>
      <main className="">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
