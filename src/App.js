<<<<<<< HEAD
import React from 'react';
import './App.css';
 
function App() {
  return (
    <div></div>
=======
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
>>>>>>> cd287ba15fdebc705b621e76cbadd1118de38555
  );
}

export default App;
