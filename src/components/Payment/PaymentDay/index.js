import React, { Component } from "react";

import { callFirebase, getdata } from "../../../Helpers/HandleFirebase";

export default class PaymentDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      newName: "",
      newPhone: ""
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    let bills = await getdata(`billsDay`);
    this.setState({
      bills
    });
  };

  addBill = () => {
    let onData = callFirebase("billsDay");
    let name = this.state.newName;
    let phone = this.state.newPhone;
    this.setState({
      newName: "",
      newPhone: ""
    });
    onData.push({
      name,
      phone,
      createAt: new Date().toLocaleString()
    });

    this.loadData();
  };

  toggleChange = (event, stateName) => {
    switch (stateName) {
      case "newName":
        this.setState({ newName: event.target.value });
        break;
      case "newPhone":
        this.setState({ newPhone: event.target.value });
        break;
      default:
        break;
    }
  };

  render() {
    const bills = this.state.bills;
    let count = 0;
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
        <div className="form-group row">
          <label className="col-sm-1 col-form-label">Name</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              onChange={e => {
                this.toggleChange(e, "newName");
              }}
            />
          </div>
          <label className="col-sm-1 col-form-label">Phone</label>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              onChange={e => {
                this.toggleChange(e, "newPhone");
              }}
            />
          </div>
          <button
            className="btn btn-large btn-info"
            onClick={() => {
              this.addBill();
            }}
          >
            Pay Now
          </button>
        </div>

        <div className="sparkline12-list shadow-reset mg-t-30">
          <div className="sparkline12-hd">
            <div className="main-sparkline12-hd">
              <h1>Payment on 20/02/2019</h1>
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
                    <th>Date pay</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {bills.map(bill => (
                    <tr key={bill.id}>
                      <td>{++count}</td>
                      <td>{bill.name}</td>
                      <td>{bill.phone}</td>
                      <td>{bill.createAt}</td>
                      <td>
                        <button className="btn btn-large btn-info">
                          Update
                        </button>
                        &nbsp; &nbsp;
                        <button className="btn btn-large btn-danger">
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
    );
  }
}
