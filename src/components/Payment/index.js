import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PaymentDay from "./PaymentDay";
import PaymentMonth from "./PaymentMonth";
import "./payment.css";

export default class index extends Component {
  render() {
    return (
      <Router>
        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <div className="">
            <Link to="/Payment/day" role="button" className="btn-tab">
              Day
            </Link>

            <Link to="/Payment/month" role="button" className="btn-tab">
              Month
            </Link>
          </div>

          <div>
            <Route path="/Payment/day" component={PaymentDay} />
            <Route path="/Payment/month" component={PaymentMonth} />
          </div>
        </div>
      </Router>
    );
  }
}
