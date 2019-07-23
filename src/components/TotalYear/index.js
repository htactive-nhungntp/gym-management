import React, { Component } from "react";
import { getdata } from "../../Helpers/HandleFirebase";

export default class StatisticYear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      month: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    };
  }

  async componentDidMount() {
    await this.LoadData(this.state.month);
  }
  LoadData = StringOfDate => {
    StringOfDate.map(async month => {
      let members = await this.LoadObject("members");
      let billsDay = await this.LoadObject("billsDay");
      let billsMonth = await this.LoadObject("billsMonth");
      let filterMembers = members.filter(
        ob => this.returnMonth(ob.createAt) === month
      );
      let filterBillsDay = billsDay.filter(
        ob => this.returnMonth(ob.createAt) === month
      );
      let filterBillsMonth = billsMonth.filter(
        ob => this.returnMonth(ob.createAt) === month
      );
      const dad = {
        month: month,
        members: filterMembers,
        billsDay: filterBillsDay,
        billsMonth: filterBillsMonth
      };
      this.setState({
        Data: [...this.state.Data, dad]
      });
    });
  };

  LoadObject = async arr => {
    let object = await getdata(arr);
    return object;
  };

  returnMonth = date => {
    let event = date;
    let index1 = event.indexOf("/");
    let index2 = event.lastIndexOf("/");
    return event.slice(index1 + 1, index2);
  };

  render() {
    let { Data } = this.state;
    console.log("sss", Data);
    return (
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
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
                    <th>Month</th>
                    <th>Registered</th>
                    <th>Pay based on Day</th>
                    <th>Pay based on Month</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {Data.length > 0
                    ? Data.map(data => (
                        <tr key={data.month}>
                          <td>{data.month}</td>
                          <td>{data.members ? data.members.length : 0}</td>
                          <td>{data.billsDay ? data.billsDay.length : 0}</td>
                          <td>
                            {data.billsMonth ? data.billsMonth.length : 0}
                          </td>
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
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}