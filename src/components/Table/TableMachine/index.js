import React, { Component } from "react";
import TableButton from "../TableButton";

export default class TableMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.machines
    };
  }

  deleteMachines = id => {
    this.props.deleteMachine(id);
  };
  render() {
    let count = 0;
    let listType = this.props.machines.map(
      ({ id, name, type_id, image, status }) => {
        let type = this.props.types.find(tp => tp.id === type_id);
        return (
          <tr key={id}>
            <td>{++count}</td>
            <td>{name}</td>
            <td>{type.type}</td>
            <td>
              <img src={image} alt="" width={60} height={70} />
            </td>
            <td>{status}</td>

            <td>
              <TableButton
                color="btn-warning"
                content="Edit"
                pathName={`/EditMachine/${id}`}
                id={id}
              />
              &nbsp; &nbsp;
              <button
                className=" btn btn-large btn-danger"
                onClick={() => this.deleteMachines(`${id}`)}
              >
                {" "}
                Delete
              </button>
            </td>
          </tr>
        );
      }
    );
    return (
      <div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                      <th>Type</th>
                      <th>Image</th>
                      <th>Status</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>{listType}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
