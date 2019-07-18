import React, { Component } from "react";
import TableButton from "../TableButton";

export default class TableMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.machines
    };
   // console.log("data props", this.state.data);
  }

  render() {
    return (
      <div>
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <TableButton
          color="btn-success"
          content="Add New Machine"
          pathName={`/AddMachine`}
        />
          <div className="sparkline12-list shadow-reset mg-t-30">
            <div className="sparkline12-hd">
              <div className="main-sparkline12-hd">
                <h1> Machines List</h1>
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
                      <th>Image</th>
                      <th>Status</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.machines.map(t => (
                      <tr key={t.id}>
                        <td>{t.id}</td>
                        <td>{t.name}</td>
                        <td>
                          <img src={t.image} alt="" width={60} height={70} />
                        </td>
                        <td>{t.status}</td>
                        <td>
                          <TableButton
                            color="btn-warning"
                            content="Edit"
                            // pathName={`/EditMember/${props.data.id}`}
                            // id={props.data.id}
                          />
                          &nbsp; &nbsp;
                          <TableButton color="btn-danger" content="Delete" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
