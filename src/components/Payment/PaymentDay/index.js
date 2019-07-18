import React, { Component } from "react";

import { getdata } from "../../../helpers/HandleFirebase";
import TableButton from "../PaymentDay";

export default class PaymentDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    };
  }

  async componentDidMount() {
    let bills = await getdata(`billsDay`);
    this.setState({
      bills
    });
  }

  render() {
    const bills = this.state.bills;
    let count = 0;
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
        <div className="form-group row">
          <label className="col-sm-1 col-form-label">Name</label>
          <div className="col-sm-4">
            <input type="text" className="form-control" />
          </div>
          <label className="col-sm-1 col-form-label">Phone</label>
          <div className="col-sm-4">
            <input type="text" className="form-control" />
          </div>
          <button className="btn btn-large btn-info">Pay Now</button>
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
                    <th>Date pay</th>
                    <th>Phone</th>
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
