import React, { Component } from "react";
import "firebase/auth";
import "firebase/firestore";
import TableMachine from "../Table/TableMachine";
import {  withFirebase } from "../../Firebase/context";
//import firebase from "../../Firebase/firebase"
require("firebase/firestore");

class MachineBase extends Component {
  constructor(props) {
    super(props);
    console.log("This is props: ", props);
    this.state = {
      machine: [],
      newData: " ",
      img: null,
      url: " "
    };
  }

  deleteMachines = index => {
    this.props.firebase.deleteMachines(index).remove();
  };
  updateMachines = index => {
    this.props.firebase.deleteMachines(index).set({
      name: " "
    });
  };
  
  randomId() {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  addMachines = url => {
    this.props.firebase.addMachines()
      .push({
        id: this.randomId(),
        name: this.state.newData,
        image: url
      })
      .getDownloadURL();
    this.setState({
      newData: " ",
      img: " "
    });
  };

  // update = key => {
  //   console.log(key);
  //   firebase
  //     .database()
  //     .ref()
  //     .child(`machines/${key}`)
  //     .set({ name: this.state.newData, image: this.state.img });
  // };

  // delete = key => {
  //   console.log(key);
  //   firebase
  //     .database()
  //     .ref()
  //     .child(`machines/${key}`)
  //     .remove();
  // };

  async componentDidMount() {
    let mac = await this.props.firebase.getdata(`machines`);
    console.log("data here", mac);
    this.setState({
      machine: mac
    });
  }

  render() {
    console.log("render", this.state.machine);
    let { machine } = this.state;
    console.log("machine: ", machine);
    return (
      <>
       <TableMachine
        machines={machine}
        toggleChange={this.toggleChange}
         handleImage={this.handleImage}
        // handleUpload={this.handleUpload}
        addMachines = {this.addMachines}

      />
      </>
     
    );
  }
}

const Machine = withFirebase(MachineBase);
export default Machine;
