import React, { Component } from "react";

import firebaseConfig from "./ConfigFirebase";
import firebase from "firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Table from "./components/Table";
import Statistic from "./components/Statistic";

import EditingMember from "../src/components/EditingMember";
// import MembersList from "../src/components/Table";
// import MembersList from "../src/components/Table";
// import MembersList from "../src/components/Table";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
      // billsDay: [],
      // billsMonth: [],
      // trainer: [],
      // profit: [],
    };

    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref("members");
    // this.addMem(
    //   "Nguyen Thi Thu Huong",
    //   "Quang Tri",
    //   "0125896432",
    //   "20/02/1999"
    // );
  }

  gotdata = data => {
    var Temp = [];
    let members = data.val();
    let key = Object.keys(members);
    for (var i = 0; i < key.length; i++) {
      var k = key[i];
      var id = members[k].id;
      var name = members[k].name;
      var address = members[k].address;
      var phone = members[k].phone;
      var DOB = members[k].DOB;
      var createAt = members[k].createAt;
      Temp.push({ key: k, id, name, address, phone, DOB, createAt });
    }

    this.setState({
      members: Temp
    });
  };

  errdata = data => {
    console.log(data);
  };

  componentDidMount() {
    this.database.on("value", this.gotdata, this.errdata);
  }

  randomId() {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  addMem = (name, address, phone, DOB) => {
    firebase
      .database()
      .ref("members")
      .push({
        id: this.randomId(),
        name,
        address,
        phone,
        DOB,
        createAt:
          new Date().getDate() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getFullYear()
      });
  };

  addMember = () => {
    this.setState({
      newData: ""
    });
  };

  updatevalue = key => {};

  update = key => {
    console.log(key);
    firebase
      .database()
      .ref()
      .child(`members/${key}`)
      .set({ name: "Nguyen Van A", createAt: "11112" });
  };

  delete = key => {
    console.log(key);
    firebase
      .database()
      .ref()
      .child(`members/${key}`)
      .remove();
  };

  render() {
    const members = this.state.members;
    return (
      <Router>
        <Layout>
          <Route
            exact
            path="/"
            component={({ match }) => (
              <Table dataTable={members} match={match} />
            )}
          />
          <Route
            exact
            path="/EditMember/:id"
            component={({ match }) => <EditingMember match={match} />}
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
