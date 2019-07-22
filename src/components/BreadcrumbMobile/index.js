import React from "react";

const BreadcrumbMobile = () => {
  return (
    <div className="breadcome-area mg-b-30 des-none">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="breadcome-list map-mg-t-40-gl shadow-reset">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
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
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <ul className="breadcome-menu">
                    <li>
                      <a href="/">Home</a>
                      <span className="bread-slash">/</span>
                    </li>
                    <li>
                      <span className="bread-blod">Dashboard</span>
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

export default BreadcrumbMobile;
