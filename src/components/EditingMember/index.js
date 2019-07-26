import React from "react";
import validator from "validator";

import TableButton from "../Table/TableButton";
import { getdata, callFirebase } from "../.././Helpers/HandleFirebase";
import { Swaling, Warning } from "../../Helpers/afterActions";

class EditingMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateName: "",
      updateAddress: "",
      updatePhone: "",
      updateDOB: "",
      updateCreateAt: null,
      id: "",
      formErrors: { updateName: "", updatePhone: "", updateAddress: "" },
      updateNameValid: "",
      updatePhoneValid: "",
      updateAddressValid: "",
      formValid: ""
    };
  }

  async componentDidMount() {
    const members = await getdata("members");
    let mem = members.find(mem => mem.id === this.props.match.params.id);
    this.setState({
      updateName: mem.name,
      updateAddress: mem.address,
      updatePhone: mem.phone,
      updateDOB: mem.DOB,
      updateCreateAt: mem.createAt,
      id: mem.id,
      updateNameValid: false,
      updatePhoneValid: false,
      updateAddressValid: false,
      formValid: false
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let updatePhoneValid = this.state.updatePhoneValid;
    let updateNameValid = this.state.updateNameValid;
    let updateAddressValid = this.state.updateAddressValid;
    switch (fieldName) {
      case "updateName":
        updateNameValid = value.match(/([\D])$/i) && value.length >= 2;
        fieldValidationErrors.updateName = updateNameValid
          ? ""
          : " Does not contain numbers and must be longer than 2 characters !";
        break;
      case "updateAddress":
        updateAddressValid = value.length >= 5;
        fieldValidationErrors.updateAddress = updateAddressValid
          ? ""
          : " Must be longer than 5 characters !";
        break;
      case "updatePhone":
        updatePhoneValid = validator.isMobilePhone(value);
        fieldValidationErrors.updatePhone = updatePhoneValid
          ? ""
          : " The phone number is not right !";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        updatePhoneValid,
        updateNameValid,
        updateAddressValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.updatePhoneValid &&
        this.state.updateNameValid &&
        this.state.updateAddressValid
    });
  }

  toggleChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  update = async id => {
    if (this.state.formValid === "") {
      let onData = await callFirebase(`members/${id}`);
      onData.set({
        name: this.state.updateName,
        address: this.state.updateAddress,
        phone: this.state.updatePhone,
        createAt: this.state.updateCreateAt,
        DOB: this.state.updateDOB
      });
      Swaling("Infpomation Updated !");
      this.setState({
        updateName: "",
        updateAddress: "",
        updatePhone: "",
        updateDOB: "",
        updateCreateAt: null,
        id: ""
      });
    } else {
      Warning("Infomations are not saved !");
    }
  };

  errorClass(error) {
    return error.length === 0 ? "" : error;
  }

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
              <span className="has-error">
                {" "}
                {this.errorClass(this.state.formErrors.updateName)}{" "}
              </span>
              <input
                type="text"
                className="form-control"
                onChange={this.toggleChange}
                name="updateName"
                value={this.state.updateName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <span className="has-error">
                {" "}
                {this.errorClass(this.state.formErrors.updateAddress)}{" "}
              </span>
              <input
                type="text"
                className="form-control"
                onChange={this.toggleChange}
                name="updateAddress"
                value={this.state.updateAddress}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              phone
            </label>
            <div className="col-sm-10">
              <span className="has-error">
                {" "}
                {this.errorClass(this.state.formErrors.updatePhone)}{" "}
              </span>
              <input
                type="text"
                className="form-control"
                onChange={this.toggleChange}
                name="updatePhone"
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
                onChange={this.toggleChange}
                name="updateDOB"
                value={this.state.updateDOB}
              />
            </div>
          </div>
          <br /> <br />
          <div className="btn-edit">
            <TableButton to="/" content="Cancel" color="btn-danger" /> &nbsp;
            &nbsp;
            <button
              className=" btn btn-large btn-success"
              onClick={() => this.update(this.state.id)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditingMember;
