import React, { Component } from "react";
import TableMachine from "../Table/TableMachine";
import {  withFirebase } from "../../Firebase/context";

class MachineBase extends Component {
  constructor(props) {
    super(props);
    console.log("This is props: ", props);
    this.state = {
      machine: [],
      newData: " ",
      img: null,
      url: " ",
      type:[]
    };
  }

  deleteMachines = async index => {
    this.props.firebase.deleteMachines(index).remove();
    let mac = await this.props.firebase.getdata(`machines`);
    console.log("data here", mac);
    let type = await this.props.firebase.getdata(`type`);
    console.log("type here", type);
    this.setState({
      machine: mac,
      type: type
    });
  };

  updateMachines = index => {
    this.props.firebase.updateMachines(index).set({
      name: " "
    });
  };
  
  async componentDidMount() {
    let mac = await this.props.firebase.getdata(`machines`);
    console.log("data here", mac);
    let type = await this.props.firebase.getdata(`type`);
    console.log("type here", type);
    this.setState({
      machine: mac,
      type: type
    });
  }

  render() {
    console.log("render", this.state.machine);
    let { machine } = this.state;
    let { type } = this.state;
    console.log("machine: ", machine);
    return (
      <>
       <TableMachine
        machines={machine}
        types = {type}
        deleteMachine={this.deleteMachines}
      />
      </>
     
    );
  }
}

const Machine = withFirebase(MachineBase);
export default Machine;
