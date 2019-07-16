import React from "react";

const Statistic = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
      <div className="income-dashone-total income-monthly shadow-reset nt-mg-b-30 res-mg-t-30">
        <div className="income-title">
          <div className="main-income-head">
            <h2>Income</h2>
            <div className="main-income-phara">
              <p>Monthly</p>
            </div>
          </div>
        </div>
        <div className="income-dashone-pro">
          <div className="income-rate-total">
            <div className="price-adminpro-rate">
              <h3>
                <span>$</span>
                <span className="counter">6,08,88,200</span>
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
      <div className="income-dashone-total orders-monthly shadow-reset nt-mg-b-30">
        <div className="income-title">
          <div className="main-income-head">
            <h2>Orders</h2>
            <div className="main-income-phara order-cl">
              <p>Annual</p>
            </div>
          </div>
        </div>
        <div className="income-dashone-pro">
          <div className="income-rate-total">
            <div className="price-adminpro-rate">
              <h3>
                <span className="counter">7,23,20</span>
              </h3>
            </div>
            <div className="price-graph">
              <span id="sparkline6" />
            </div>
          </div>
          <div className="income-range order-cl">
            <p>New Orders</p>
            <span className="income-percentange">
              66% <i className="fa fa-level-up" />
            </span>
          </div>
          <div className="clear" />
        </div>
      </div>
      <div className="income-dashone-total visitor-monthly shadow-reset nt-mg-b-30">
        <div className="income-title">
          <div className="main-income-head">
            <h2>Visitor</h2>
            <div className="main-income-phara visitor-cl">
              <p>Today</p>
            </div>
          </div>
        </div>
        <div className="income-dashone-pro">
          <div className="income-rate-total">
            <div className="price-adminpro-rate">
              <h3>
                <span className="counter">8,88,200</span>
              </h3>
            </div>
            <div className="price-graph">
              <span id="sparkline2" />
            </div>
          </div>
          <div className="income-range visitor-cl">
            <p>New Visitor</p>
            <span className="income-percentange">
              55% <i className="fa fa-level-up" />
            </span>
          </div>
          <div className="clear" />
        </div>
      </div>
      <div className="income-dashone-total user-monthly shadow-reset nt-mg-b-30">
        <div className="income-title">
          <div className="main-income-head">
            <h2>User activity</h2>
            <div className="main-income-phara low-value-cl">
              <p>Low Value</p>
            </div>
          </div>
        </div>
        <div className="income-dashone-pro">
          <div className="income-rate-total">
            <div className="price-adminpro-rate">
              <h3>
                <span className="counter">88,200</span>
              </h3>
            </div>
            <div className="price-graph">
              <span id="sparkline5" />
            </div>
          </div>
          <div className="income-range low-value-cl">
            <p>In first month</p>
            <span className="income-percentange">
              33% <i className="fa fa-level-down" />
            </span>
          </div>
          <div className="clear" />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
