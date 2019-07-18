import React from "react";

import TableButton from "../Table/TableButton";

import { addMem } from "../../Helpers/HandleFirebase";

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

  async componentDidMount() {}

  addMember() {
    const name = this.state.newName;
    const address = this.state.newAddress;
    const phone = this.state.newPhone;
    const DOB = this.state.newDOB;
    addMem(name, address, phone, DOB);
  }

  toggleChange = (event, stateName) => {
    switch (stateName) {
      case "updateName":
        this.setState({ updateName: event.target.value });
        break;
      case "updateAddress":
        this.setState({ updateAddress: event.target.value });
        break;
      case "updatePhone":
        this.setState({ updatePhone: event.target.value });
        break;
      case "updateDOB":
        this.setState({ updateDOB: event.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    console.log(this.state.updateAddress);
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
                onChange={e => this.toggleChange(e, "updateName")}
                value={this.state.updateName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={e => this.toggleChange(e, "updateAddress")}
                value={this.state.updateAddress}
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
                onChange={e => this.toggleChange(e, "updatePhone")}
                value={this.state.updatePhone}
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
                onChange={e => this.toggleChange(e, "updateDOB")}
                value={this.state.updateDOB}
              />
            </div>
          </div>
          <br /> <br />
          <div className="btn-edit">
            <TableButton to="/" content="Cancel" color="btn-danger" /> &nbsp;
            &nbsp;
            <TableButton
              className=" btn btn-large btn-success"
              onClick={() => this.addMember()}
            />
            {/* Save
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewMember;
