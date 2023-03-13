import React from 'react';
import Sidebar from '../Sidebar';
import './layout.css';
import { useLocation } from 'react-router';

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }): JSX.Element => {
  let location = useLocation();
  const ShowSidebar = location.pathname !== '/login';
  return (
    <main className={`${ShowSidebar ? 'layout' : 'w-full'} bg-terciary`}>
      {location.pathname !== '/login' && <Sidebar />}
      <div className="content">{children}</div>
    </main>
  );
};

export default Layout;
