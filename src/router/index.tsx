import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Transactions from '../views/Transactions';
import Catalogs from '../views/Catalogs';
import NotFound from '../views/NotFound';
import Configs from '../views/Configs';
import Layout from '../components/Layout';
import Login from '../views/Login';

const Router: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/Assets/:selectedAssetOption" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path=":type/Catalogs/:catalog/:selectedOption" element={<Catalogs />} />
          <Route path="/Configs" element={<Configs />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
