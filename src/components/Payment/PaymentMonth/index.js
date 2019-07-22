import React, { Component } from "react";

import {
  getdata,
  callFirebase,
  deleteData
} from "../../../Helpers/HandleFirebase";
import { Swaling } from "../../../Helpers/afterActions";

export default class PaymentMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originbills: [],
      findPhone: "",
      findMonth: "",
      month: "",
      foundmembers: [],
      chooseMem: []
    };
  }

  filterMonth = event => {
    this.setState({
      month: event.target.value
    });
    this.loadData();
  };

  deleteBillMonth = id => {
    let comfirm = window.confirm("Are you sure you wish to delete this item?");
    if (comfirm) {
      let onData = deleteData(`billsMonth/${id}`);
      onData.remove();
      Swaling("Information deleted !");
      this.loadData();
    }
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    let origin = await getdata("billsMonth");
    let month = this.state.month;
    switch (month) {
      case "1":
        this.setState({
          originbills: origin.filter(bill => bill.month === "1")
        });
        break;
      case "2":
        this.setState({
          originbills: origin.filter(bill => bill.month === "2")
        });
        break;
      case "3":
        this.setState({
          originbills: origin.filter(bill => bill.month === "3")
        });
        break;
      case "4":
        this.setState({
          originbills: origin.filter(bill => bill.month === "4")
        });
        break;
      case "5":
        this.setState({
          originbills: origin.filter(bill => bill.month === "5")
        });
        break;
      case "6":
        this.setState({
          originbills: origin.filter(bill => bill.month === "6")
        });
        break;
      case "7":
        this.setState({
          originbills: origin.filter(bill => bill.month === "7")
        });
        break;
      case "8":
        this.setState({
          originbills: origin.filter(bill => bill.month === "8")
        });
        break;
      case "9":
        this.setState({
          originbills: origin.filter(bill => bill.month === "9")
        });
        break;
      case "10":
        this.setState({
          originbills: origin.filter(bill => bill.month === "10")
        });
        break;
      case "11":
        this.setState({
          originbills: origin.filter(bill => bill.month === "11")
        });
        break;
      case "12":
        this.setState({
          originbills: origin.filter(bill => bill.month === "12")
        });
        break;

      default:
        this.setState({
          originbills: origin
        });
        break;
    }
  };

  phoneOnchange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    switch (name) {
      case "findPhone":
        this.setState({
          findPhone: value
        });
        this.findOnNumberPhone(value);
        this.showFoundMember(this.state.foundmembers);
        break;
      case "findMonth":
        this.setState({
          findMonth: value
        });
        break;
      default:
        break;
    }
  };

  findOnNumberPhone = async phoneNumber => {
    let members = await getdata("members");
    let member = members.filter(mem => mem.phone.includes(phoneNumber));
    this.setState({
      foundmembers: member
    });
  };

  onSaveBillsMonth = mem => {
    let onData = callFirebase(`billsMonth`);
    onData.push({
      name: mem.name,
      phone: mem.phone,
      month: this.state.findMonth,
      createAt: new Date().toLocaleString()
    });
    Swaling("Data's saved successfully !");
    this.setState({
      findPhone: "",
      findMonth: "",
      foundmembers: []
    });
    this.loadData();
  };

  showFoundMember = () => {
    let member = this.state.foundmembers;
    return member.map(mem => (
      <tr key={mem.id}>
        <td />
        <td>{mem.name}</td>
        <td>{mem.phone}</td>
        <td>{mem.createAt}</td>
        <td>
          <button
            className="btn btn-large btn-danger"
            onClick={() => this.onSaveBillsMonth(mem)}
          >
            Pay Now
          </button>
          &nbsp; &nbsp;
        </td>
      </tr>
    ));
  };

  render() {
    let { findPhone, originbills } = this.state;
    let count = 0;
    return (
      <>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
          <br /> <h2>Add a New Bill for Month</h2> <br />
          <div className="form-group row">
            <label className="col-sm-1 col-form-label">Phone</label>
            <div className="col-sm-4">
              <input
                type="text"
                name="findPhone"
                className="form-control"
                value={this.state.findPhone}
                onChange={this.phoneOnchange}
              />
            </div>
            <div className="col-sm-4">
              <select
                name="findMonth"
                id="input"
                className="form-control"
                required="required"
                onChange={this.phoneOnchange}
              >
                <option>Choose the Month the you are Paying for</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
          </div>
          <div className="sparkline12-list shadow-reset mg-t-30" id="found">
            <table className="table hover-table">
              <tbody>{this.showFoundMember()}</tbody>
            </table>
          </div>
          <br /> <h2>Payment for Month</h2> <br />
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <select
              // name="findMonth"
              id="input"
              className="form-control"
              required="required"
              onChange={this.filterMonth}
            >
              <option value="0">Filter</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <br /> <br />
          <div className="sparkline12-list shadow-reset mg-t-30">
            <div className="sparkline12-hd">
              <div className="main-sparkline12-hd">
                <h1>Payment for Month</h1>
                <div className="sparkline12-outline-icon">
                  <span className="sparkline12-collapse-link">
                    <i className="fa fa-chevron-up" />
                  </span>
                  <span>
                    <i className="fa fa-wrench" />
                  </span>
                  <span className="sparkline12-collapse-close">
                    <i className="fa fa-times" />
                  </span>
                </div>
              </div>
            </div>

            <div className="sparkline12-graph">
              <div className="static-table-list">
                <table className="table hover-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Month</th>
                      <th>Date pay</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {originbills.map(bill => (
                      <tr key={bill.id}>
                        <td>{++count}</td>
                        <td>{bill.name}</td>
                        <td>{bill.phone}</td>
                        <td>{bill.month}</td>
                        <td>{bill.createAt}</td>
                        <td>
                          <button className="btn btn-large btn-info">
                            Update
                          </button>
                          &nbsp; &nbsp;
                          <button
                            className="btn btn-large btn-danger"
                            onClick={() => this.deleteBillMonth(bill.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
