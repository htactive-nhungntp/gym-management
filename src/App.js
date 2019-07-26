import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Layout from "./components/Layout";
import Table from "./components/Table";
import Machine from "./components/Machines";
import AddMachineBase from "./components/Form/FormMachine";
import EditMachineBase from "./components/Form/FormMachine/EditMachine";
import EditingMember from "../src/components/EditingMember";
import Payment from "./components/Payment";
import StatisticYear from "./components/TotalYear";
import AddNewMember from "./components/AddNewMember";
import SignUp from "./components/Auth/SignUp";
import { getdata } from "./Helpers/HandleFirebase";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

import AdminProfileBase from "./components/AdminProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acount: [],
      members: [],
      billsDay: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    let billsDay = await getdata(`billsDay`);
    let members = await getdata(`members`);
    let acount = localStorage.getItem("user");
    this.setState({
      members,
      billsDay,
      acount
    });
    console.log(this.state.acount, "fffffff");
  };

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

  isAuthenticated = () => {
    if (localStorage.getItem("user")) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <Router>
        {!this.state.acount && <Redirect to="/signup" />}

        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Layout>
            <PrivateRoute
              exact
              path="/"
              component={({ match }) => <Table match={match} />}
              isAuthenticated={this.isAuthenticated}
            />
            {/* <Route
              exact
              path="/"
              component={({ match }) => <Table match={match} />}
            /> */}
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

            <Route
              exact
              path="/profile"
              component={({ match }) => <AdminProfileBase match={match} />}
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
              path="/Statistic"
              component={({ match }) => <StatisticYear match={match} />}
            />

            <Route
              exact
              path="/Payment/day"
              component={({ match }) => <Payment match={match} />}
            />

            <Route
              exact
              path="/AddMachine"
              component={props => <AddMachineBase {...props} />}
            />
          </Layout>
        </Switch>
      </Router>
    );
  }
}

export default App;
