import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Breadcrumb from "../Breadcrumb";
import BreadcrumbMobile from "../BreadcrumbMobile";

const Layout = props => {
  return (
    <div className="wrapper-pro">
      <Sidebar />
      <div className="content-inner-all">
        <Header />
        <Breadcrumb />
        <BreadcrumbMobile />
        <div className="container-fluid mg-b-40 mg-t-30 flex-wrap justify-content-center">{props.children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
