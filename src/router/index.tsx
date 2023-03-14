import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Transactions from "../views/Transactions";
import Catalogs from "../views/Catalogs";
import NotFound from "../views/NotFound";
import Configs from "../views/Configs";
import Layout from "../components/Layout";
import Login from "../views/Login";

const Router: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/Login" element={<Login />} />
          <Route path="/Assets/:selectedAssetOption" element={<Home />} />
          <Route path=":type/Catalogs/:selectedOption/:id" element={<Catalogs />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path=":type/Transactions/:selectedTransactionsOption" element={<Transactions />} />
          <Route path="/Configs" element={<Configs />} />
          <Route path="/Configs/:selectedConfigOption" element={<Configs />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
