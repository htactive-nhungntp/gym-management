import React from "react";

const Breadcrumb = () => {
  return (
    <div className="breadcome-area mg-b-30 small-dn">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcome-list shadow-reset">
              <div className="row">
                <div className="col-lg-6">
                  <div className="breadcome-heading">
                    <form role="search">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="form-control"
                      />
                      <a href="/">
                        <i className="fa fa-search" />
                      </a>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="breadcome-menu">
                    <li>
                      <a href="/">Home</a>{" "}
                      <span className="bread-slash">/</span>
                    </li>
                    <li>
                      <span className="bread-blod">Profile</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
