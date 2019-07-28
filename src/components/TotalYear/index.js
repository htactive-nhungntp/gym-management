import React, { Component } from "react";

import ChartJS from "../Chart";
import Revenue from "../Chart/Revenue";
export default class StatisticYear extends Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h3>Chart showing revenue for every month in 2019 (VND)</h3>
        <Revenue />
        <br />
        <h3>
        Chart showing registered, paid for day, paid for month in 2019 (person)
        </h3>
        <ChartJS />
      </div>
    );
  }
}
