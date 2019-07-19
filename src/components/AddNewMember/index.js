import React from "react";

import TableButton from "../Table/TableButton";

import { callFirebase } from "../.././Helpers/HandleFirebase";


class AddNewMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newAddress: "",
      newPhone: "",
      newDOB: ""
    };
  }

  addMember() {
    const name = this.state.newName;
    const address = this.state.newAddress;
    const phone = this.state.newPhone;
    const DOB = this.state.newDOB;

    let onData = callFirebase(`members`);
    onData.push({
      name,
      address,
      phone,
      DOB,
      createAt: new Date().toLocaleString()
    });
  }

  toggleChange = (event, stateName) => {
    switch (stateName) {

      case "newName":
        this.setState({ newName: event.target.value });
        break;
      case "newAddress":
        this.setState({ newAddress: event.target.value });
        break;
      case "newPhone":
        this.setState({ newPhone: event.target.value });
        break;
      case "newDOB":
        this.setState({ newDOB: event.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />

        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <div className="form-group row">
            <h2>Update</h2>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={e => this.toggleChange(e, "newName")}
                value={this.state.newName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={e => this.toggleChange(e, "newAddress")}
                value={this.state.newAddress}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              phone
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={e => this.toggleChange(e, "newPhone")}
                value={this.state.newPhone}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Day of Birth
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                onChange={e => this.toggleChange(e, "newDOB")}
                value={this.state.newDOB}
              />
            </div>
          </div>
          <br /> <br />
          <div className="btn-edit">
            <TableButton to="/" content="Cancel" color="btn-danger" /> &nbsp;
            &nbsp;

            <button
              className="btn btn-large btn-success"
              onClick={() => this.addMember()}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewMember;
