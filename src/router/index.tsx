import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Transactions from '../views/Transactions';
import Catalogs from '../views/Catalogs';
import NotFound from '../views/NotFound';
import Configs from '../views/Configs';
import Layout from '../components/Layout';
import Login from '../views/Login';
import CatalogsTable from '@/views/Catalogs/CatalogsTable';

const Router: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/Login" element={<Login />} />

          <Route path="/Assets/:selectedAssetOption" element={<Home />} />

          <Route path=":type/Catalogs/:catalogType/:selectedOption/" element={<Catalogs />} />
          <Route path="/Catalogs/:selectedCatalogOption" element={<CatalogsTable />} />

          <Route path="/Transactions/:selectedTransactionOption" element={<Transactions />} />
          <Route path=":type/Transactions/:selectedTransactionsOption" element={<Transactions />} />

          <Route path="/Configs/:selectedConfigOption" element={<Configs />} />
          <Route path=":type/Configs/:selectedConfigOption" element={<Configs />} />

          <Route path="*" element={<NotFound />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
