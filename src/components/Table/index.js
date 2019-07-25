import React from "react";

import firebase from "firebase";
import { Swaling } from "../../Helpers/afterActions";
import firebaseConfig from "../../ConfigFirebase";

import TableRow from "./TableRow";
import TableButton from "./TableButton";
import { getdata, deleteData } from "../.././Helpers/HandleFirebase";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const members = await getdata("members");
    this.setState({
      members: members
    });
  };

  
  deleteMember = async key => {
    let comfirm = window.confirm("Are you sure you wish to delete this item?");
    if (comfirm) {
      let onData = deleteData(key);
      onData.remove();
      Swaling("Information deleted !");
      this.loadData();
    }
  };

  render() {
    const { members } = this.state;
    let count = 0;
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <TableButton
          color="btn-success"
          content="Add New Member"
          pathName={`/AddMember`}
        />
        <div className="sparkline12-list shadow-reset mg-t-30">
          <div className="sparkline12-hd">
            <div className="main-sparkline12-hd">
              <h1>Members List</h1>
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
                    <th>Address</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Date Register</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map(member => (
                    <TableRow
                      count={++count}
                      key={member.id}
                      data={member}
                      deleteMem={() =>
                        this.deleteMember(`members/${member.id}`)
                      }
                    />
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

export default Table;
