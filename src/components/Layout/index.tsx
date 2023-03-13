import React from 'react';
import Sidebar from '../Sidebar';
import './layout.css';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }): JSX.Element => {
  let location = useLocation();
  const isOpenSidebar = useSelector((state: { app: Store }) => state.app.sidebarOpen);
  const handleStyles = isOpenSidebar ? 'layout_open' : 'layout_close';
  const ShowSidebar = location.pathname !== '/login';
  return (
    <main className={`${ShowSidebar ? 'layout' : 'w-full'} ${handleStyles} bg-terciary`}>
      {location.pathname !== '/login' && <Sidebar />}
      <div className={`${ShowSidebar ? '' : 'content'}`}>{children}</div>
    </main>
  );
};

export default Layout;
