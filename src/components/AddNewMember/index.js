import React from "react";
import validator from 'validator' 

import TableButton from "../Table/TableButton";

import { callFirebase } from "../.././Helpers/HandleFirebase";

import { callFirebase } from "../.././Helpers/HandleFirebase";
import {Swaling, Warning} from "../../Helpers/afterActions"


class AddNewMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newAddress: "",
      newPhone: "",
      newDOB: "",
      formErrors: {newName: "", newPhone: ""},
      newNameValid: "",
      newPhoneValid: "",
      formValid: ""
    };
  }

  errorClass(error) {
    return error.length === 0 ? "" : error;
  }

  componentDidMount(){
    this.setState({
      newNameValid: false,
      newPhoneValid: false,
      formValid: false
    });

    this.setState({
      newName: "",
      newAddress: "",
      newPhone: "",
      newDOB: ""
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

  addMember() {
    if(this.state.formValid){
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
      Swaling("Infpomation Added !");
      this.setState({
        newName: "",
        newAddress: "",
        newPhone: "",
        newDOB: ""
      });
    }else{
      Warning("Infomations are saved !");
    }
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let newPhoneValid = this.state.newPhoneValid;
    let newNameValid = this.state.newNameValid;
    switch (fieldName) {
        case "newName":
          newNameValid = value.match(/([\D])$/i) && value.length >= 2;
            fieldValidationErrors.newName = newNameValid ? "" : " Does not contain numbers and must be longer than 2 characters";
            break;
        case "newPhone":
            newPhoneValid = validator.isMobilePhone(value);
            fieldValidationErrors.newPhone = newPhoneValid ? "" : " The phone number is not right !";
            break;
        default:
            break;

    }

    this.setState(
        {
            formErrors: fieldValidationErrors,
            newPhoneValid: newPhoneValid,
            newNameValid: newNameValid,
        },
        this.validateForm
    );
}

validateForm() {
    this.setState(
        {
            formValid: this.state.newPhoneValid && this.state.newNameValid
        }
    );
}

  toggleChange = (event) => {
    var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
  };

  render() {
    return (
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" />

        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <div className="form-group row">
            <h2>Add New Member</h2>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
            <span className="has-error"> {this.errorClass(this.state.formErrors.newName)} </span>
              <input
              required 
                type="text"
                className={`form-control`}
                onChange={this.toggleChange}
                name="newName"
                value={this.state.newName}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Address</label>
            <div className="col-sm-10">
              <input
              required 
                type="text"
                className={`form-control`}
                onChange={this.toggleChange}
                name="newAddress"
                value={this.state.newAddress}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              phone
            </label>
            <div className="col-sm-10">
            <span className="has-error"> {this.errorClass(this.state.formErrors.newPhone)} </span>
              <input
              required 
                type="text"
                className={`form-control `}
                name="newPhone"
                onChange={this.toggleChange}
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
              required 
                type="date"
                className="form-control"
                name="newDOB"
                onChange={this.toggleChange}
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
