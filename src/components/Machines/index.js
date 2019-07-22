import React, { Component } from "react";
import TableMachine from "../Table/TableMachine";
import { withFirebase } from "../../Firebase/context";

class MachineBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machine: [],
      newData: " ",
      img: null,
      url: " ",
      type: []
    };
  }

  deleteMachines = async index => {
    this.props.firebase.deleteMachines(index).remove();
    this.loadData();
  };

  updateMachines = index => {
    this.props.firebase.updateMachines(index).set({
      name: " "
    });
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    let mac = await this.props.firebase.getdata(`machines`);
    let type = await this.props.firebase.getdata(`type`);
    this.setState({
      machine: mac,
      type: type
    });
  };

  render() {
    let { machine } = this.state;
    let { type } = this.state;
    return (
      <>
        <TableMachine
          machines={machine}
          types={type}
          deleteMachine={this.deleteMachines}
        />
      </>
    );
  }
}

const Machine = withFirebase(MachineBase);
export default Machine;
