import React, { Component } from "react";

export default class FoundMem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
    console.log("kkkkkk", props);
  }

  render() {
    return (
      <>
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
                  <th>Date pay</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {/* {bills.map(bill => (
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
                            <button
                              className="btn btn-large btn-danger"
                              onClick={() => this.deleteBill(bill.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
