import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Table from "./components/Table";
import Statistic from "./components/Statistic";

import Machine from "./components/Machines";
import AddMachineBase from "./components/Form/FormMachine"
import EditMachineBase from "./components/Form/FormMachine/EditMachine"

import EditingMember from "../src/components/EditingMember";
import Payment from "./components/Payment";
import AddNewMember from "./components/AddNewMember";
import { getdata } from "./helpers/HandleFirebase";
import "./App.css";
import AddNewMember from "./components/AddNewMember";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      billsDay: []
    };
  }

  async componentDidMount() {
    let billsDay = await getdata(`billsDay`);
    let members = await getdata(`members`);
    this.setState({
      members,
      billsDay
    });
  }

  handlingDateTime(dateTime) {
    let index = dateTime.search("/");
    var res = dateTime.substr(index + 1, 1);
    return res;
  }

  statisticInMonth = state => {
    let members = [];
    members = state.filter(
      mem =>
        this.handlingDateTime(mem.createAt) === `${new Date().getMonth() + 1}`
    );
    return members;
  };

  totalMemPer = arrMem => {
    const members = this.statisticInMonth(arrMem);
    let percentRegis = (members.length / 100) * 100;
    return percentRegis;
  };

  render() {
    const total = this.state.members;
    const percent = this.totalMemPer(this.statisticInMonth(this.state.members));
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

          <Route
            exact
            path="/machine"
            component={({ match }) => <Machine match={match} />}
            />

          <Route exact path="/AddMember" component={() => <AddNewMember />} />
          <Route
            exact
            path="/DeleteMember/:id"
            component={({ match }) => <EditingMember match={match} />}
          />


           <Route
            exact
            path="/EditMachine/:id"
            component={({ match }) => <EditMachineBase match={match} />}
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

          <Route exact path="/AddMachine" component={props => <AddMachineBase {...props} />} />
          <Statistic />

          <Statistic totalMem={total} percent={percent} />

        </Layout>
      </Router>
    );
  }
}

export default App;
