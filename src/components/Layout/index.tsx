import React from "react";
import Sidebar from "../Sidebar";
import "./layout.css";

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}): JSX.Element => {
  return (
    <main className="layout">
      <Sidebar />
      <div className="content">{children}</div>
    </main>
  );
};

export default Layout;
