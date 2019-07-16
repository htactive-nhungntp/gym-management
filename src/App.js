import React from "react";

import "./App.css";
import Layout from "./components/Layout";
import Table from "./components/Table";
import Statistic from "./components/Statistic"


function App() {
  return (
    <Layout>
       <Table/>
       <Statistic/>
    </Layout>
  );
}

export default App;
