import React from "react";

// import TableRow from "./TableRow";
import { getdata } from "../../Helpers/HandleFirebase";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    this.handleData();
  }

  handleData = async () => {
    const members = await getdata("members");
    console.log("state", members);
    // this.setState({
    //   members: members
    // });
  };

  render() {
    // const members = this.state.members;
    return (
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
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
                  {/* {members.map(member => (
                    <TableRow />
                  ))} */}
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
