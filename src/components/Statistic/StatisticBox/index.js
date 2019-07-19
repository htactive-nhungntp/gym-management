import React from "react";

export const StatisticBox = props => {
  return (
    <div className={props.data.className}>
      <div className="income-title">
        <div className="main-income-head">
          <h2>{props.data.title}</h2>
          <div className="main-income-phara">
            <p>{}</p>
          </div>
        </div>
      </div>
      <div className="income-dashone-pro">
        <div className="income-rate-total">
          <div className="price-adminpro-rate">
            <h3>
              <span>VND</span>
              <span className="counter">{props.data.total}</span>
            </h3>
          </div>
          <div className="price-graph">
            <span id="sparkline1" />
          </div>
        </div>
        <div className="income-range">
          <p>Total income</p>
          <span className="income-percentange">
            98% <i className="fa fa-bolt" />
          </span>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default StatisticBox;
