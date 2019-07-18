import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Table from "./components/Table";
import Statistic from "./components/Statistic";

import EditingMember from "../src/components/EditingMember";
import Payment from "./components/Payment";
// import MembersList from "../src/components/Table";
// import MembersList from "../src/components/Table";

import "./App.css";
import AddNewMember from "./components/AddNewMember";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     members: []
  //   };
  // }

  render() {
    return (
      <Router>
        <Layout>
          <Route
            exact
            path="/"
            component={({ match }) => <Table match={match} />}
          />
          <Route
            exact
            path="/EditMember/:id"
            component={({ match }) => <EditingMember match={match} />}
          />
          <Route exact path="/AddMember" component={() => <AddNewMember />} />
          <Route
            exact
            path="/DeleteMember/:id"
            component={({ match }) => <EditingMember match={match} />}
          />

          <Route
            exact
            path="/Payment"
            component={({ match }) => <Payment match={match} />}
          />

          {/* <Route path="/EditMember" component={MemberEditing} /> */}
          {/* <Route path="/DeleteMember" component={Detail} />
          <Route path="/AddMember" component={Detail} />
          <Route path="/PaymentDay" component={Detail} />
          <Route path="/PaymentMonth" component={Detail} /> */}
          {/*  */}
          <Statistic />
        </Layout>
      </Router>
    );
  }
}

export default App;
