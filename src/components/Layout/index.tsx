import React from "react";
import Sidebar from "../Sidebar";
import { useSelector } from "react-redux";
import "./layout.css";

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children
}): JSX.Element => {
  const isOpen = useSelector((state: { app: Store }) => state.app.sidebarOpen);
  const handleStyles = isOpen ? "layout_open" : "layout_close";
  return (
    <div className="layout">
      <main className={handleStyles}>
        <Sidebar />
        <div className="content">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
