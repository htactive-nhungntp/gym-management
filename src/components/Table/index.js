import React from "react";

const Table = () => {
  return (
    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
      <div className="sparkline12-list shadow-reset mg-t-30">
        <div className="sparkline12-hd">
          <div className="main-sparkline12-hd">
            <h1>Table</h1>
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
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mamun</td>
                  <td>Roshid</td>
                  <td>@Facebook</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Suhag</td>
                  <td>Khan</td>
                  <td>@Twitter</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sakil</td>
                  <td>Shak</td>
                  <td>@Linkedin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
