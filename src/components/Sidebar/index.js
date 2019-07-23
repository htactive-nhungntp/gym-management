import React from "react";
import { Link } from "react-router-dom";
import {withFirebase} from '../../Firebase/context'

class SidebarBase extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    let data = await this.props.firebase.getdata(`acount`);
    this.setState({
        user: data,
    });
  };
  
  render() {
    const dataNhung =this.state.user.map((infor)=>{
      return(
           <div className="sidebar-header">
             <a href="/">
             <img className="avatar-user" src={infor.avatar} alt="can not download" />
             </a>
             <h3>{infor.user_name}</h3>
         </div>
      )
    })
    
    return (
      <div className="left-sidebar-pro">
        <nav id="sidebar">
      {dataNhung}
        <div className="left-custom-menu-adp-wrap">
          <ul className="nav navbar-nav left-sidebar-menu-pro">
            <li className="nav-item">
              <Link
                to="/"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-home" />{" "}
                <span className="mini-dn">Home</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Payment"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-envelope" />{" "}
                <span className="mini-dn">Payment</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </Link>
              <div
                role="menu"
                className="dropdown-menu left-menu-dropdown animated flipInX"
              >
                <a href="view-mail.html" className="dropdown-item">
                  View Mail
                </a>
                <a href="compose-mail.html" className="dropdown-item">
                  Compose Mail
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/machine"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-envelope" />{" "}
                <span className="mini-dn">Machines</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </Link>
            </li>
            <li className="nav-item">
                to="/profile"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-envelope" />{" "}
                <span className="mini-dn">Admin Profile</span>{" "}
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
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-bar-chart-o" />{" "}
                <span className="mini-dn">Charts</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-table" />{" "}
                <span className="mini-dn">Data Tables</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </a>
              <div
                role="menu"
                className="dropdown-menu left-menu-dropdown animated flipInX"
              >
                <a href="static-table.html" className="dropdown-item">
                  Static Table
                </a>
                <a href="data-table.html" className="dropdown-item">
                  Data Table
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="/"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-edit" />{" "}
                <span className="mini-dn">Forms Elements</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="/"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-desktop" />{" "}
                <span className="mini-dn">App views</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
                className="nav-link dropdown-toggle"
              >
                <i className="fa big-icon fa-files-o" />{" "}
                <span className="mini-dn">Pages</span>{" "}
                <span className="indicator-right-menu mini-dn">
                  <i className="fa indicator-mn fa-angle-left" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
        );
      
    }}
let sidebar = withFirebase(SidebarBase)
export default sidebar;
