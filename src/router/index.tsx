import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Landing from "../views/Landing";
import Home from "../views/Home";
import Transactions from "../views/Transactions";
import Catalogs from "../views/Catalogs";
import NotFound from "../views/NotFound";
import Configs from "../views/Configs";
import Logistics from "@/views/Forms/Logistics";

const Router: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/Catalogs/:selectedOption" element={<Catalogs />} />
        <Route path="/Configs" element={<Configs />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
