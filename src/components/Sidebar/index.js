import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../../Firebase/context";

class SidebarBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    let data = await this.props.firebase.getdata(`acount`);
    this.setState({
      user: data
    });
  };

  render() {
    const dataNhung = this.state.user.map((infor, Index) => {
      return (
        <div className="sidebar-header" key={Index}>
          <a href="/">
            <img
              className="avatar-user"
              src={infor.avatar}
              alt="can not download"
            />
          </a>
          <h3>{infor.user_name}</h3>
        </div>
      );
    });

    return (
      <div className="left-sidebar-pro">
        <nav id="sidebar">
          {dataNhung}
          <div className="left-custom-menu-adp-wrap">
            <ul className="nav navbar-nav left-sidebar-menu-pro">
              <li className="nav-item">
                <Link
                  to="/profile"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  className="nav-link"
                >
                  <i className="fa big-icon fa-user" />{" "}
                  <span className="mini-dn">Admin Profile</span>{" "}
                  <span className="indicator-right-menu mini-dn">
                    <i className="fa indicator-mn fa-angle-left" />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  className="nav-link "
                >
                  <i className="fa big-icon fa-users" />{" "}
                  <span className="mini-dn">Members</span>{" "}
                  <span className="indicator-right-menu mini-dn">
                    <i className="fa indicator-mn fa-angle-left" />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Payment/day"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  className="nav-link"
                >
                  <i className="fa big-icon fa-ticket" />{" "}
                  <span className="mini-dn">Payment</span>{" "}
                  <span className="indicator-right-menu mini-dn">
                    <i className="fa indicator-mn fa-angle-left" />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/machine"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  className="nav-link "
                >
                  <i className="fa big-icon fa-cog" />{" "}
                  <span className="mini-dn">Machines</span>{" "}
                  <span className="indicator-right-menu mini-dn">
                    <i className="fa indicator-mn fa-angle-left" />
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Statistic"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  className="nav-link"
                >
                  <i className="fa big-icon fa-bar-chart-o" />{" "}
                  <span className="mini-dn">Dashboard</span>{" "}
                  <span className="indicator-right-menu mini-dn">
                    <i className="fa indicator-mn fa-angle-left" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
let sidebar = withFirebase(SidebarBase);
export default sidebar;
