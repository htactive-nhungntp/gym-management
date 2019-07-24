import React, { Component } from "react";
import CreateReactClass from "create-react-class";
import "./less.less";

export var ChartJS = CreateReactClass({
  getInitialState() {
    return {
      data: [],
      series: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      labels: ["Register", "Pay for Day", "Pay for Month", "Costs", "Profit"],
      colors: ["#43A19E", "#7B43A1", "#1de260", "#F2317A", "#e2a31d"]
    };
  },
  componentDidMount: function() {
    this.populateArray();
    setInterval(this.populateArray, 2000);
  },
  populateArray: function() {
    var data = [],
      series = 12, //getRandomInt(2, 10),
      serieLength = 5; //getRandomInt(2, 10);

    for (var i = series; i--; ) {
      var tmp = [];

      for (var j = serieLength; j--; ) {
        tmp.push(i);
      }

      data.push(tmp);
    }

    this.setState({ data: data });
  },
  render: function() {
    return (
      <section>
        <Charts
          data={this.state.data}
          labels={this.state.series}
          colors={this.state.colors}
          height={250}
        />

        <Legend labels={this.state.labels} colors={this.state.colors} />
      </section>
    );
  }
});

var Legend = CreateReactClass({
  render: function() {
    var labels = this.props.labels,
      colors = this.props.colors;

    return (
      <div className="Legend">
        {labels.map(function(label, labelIndex) {
          return (
            <div>
              <span
                className="Legend--color"
                style={{ backgroundColor: colors[labelIndex % colors.length] }}
              />
              <span className="Legend--label">{label}</span>
            </div>
          );
        })}
      </div>
    );
  }
});

var Charts = CreateReactClass({
  render: function() {
    var self = this,
      data = this.props.data,
      layered = this.props.grouping === "layered" ? true : false,
      stacked = this.props.grouping === "stacked" ? true : false,
      opaque = this.props.opaque,
      max = 0;
    console.log("data: ", this.props.data);
    for (var i = data.length; i--; ) {
      for (var j = data[i].length; j--; ) {
        if (data[i][j] > max) {
          max = data[i][j];
        }
      }
    }

    return (
      <div className={"Charts" + (this.props.horizontal ? " horizontal" : "")}>
        {data.map(function(serie, serieIndex) {
          // var sortedSerie = serie.slice(0),
          var sum;

          // sum = serie.reduce(function(carry, current) {
          //   return carry + current;
          // }, 0);
          // sortedSerie.sort(compareNumbers);

          return (
            <div
              className={"Charts--serie " + self.props.grouping}
              key={serieIndex}
              style={{ height: self.props.height ? self.props.height : "auto" }}
            >
              <label>{self.props.labels[serieIndex]}</label>
              {serie.map(function(item, itemIndex) {
                var color = self.props.colors[itemIndex],
                  style,
                  size = (item / (stacked ? sum : max)) * 100;

                style = {
                  backgroundColor: color,
                  opacity: opaque ? 1 : item / max + 0.05,
                  zIndex: item
                };

                if (self.props.horizontal) {
                  style["width"] = 800 + "%";
                } else {
                  style["height"] = size + "%";
                }

                // if (layered && !self.props.horizontal) {
                //   //console.log(sortedSerie, serie, sortedSerie.indexOf(item));
                //   style["right"] =
                //     (sortedSerie.indexOf(item) / (serie.length + 1)) * 100 +
                //     "%";
                //   // style['left'] = (itemIndex * 10) + '%';
                // }

                return (
                  <div
                    className={"Charts--item " + self.props.grouping}
                    style={style}
                    key={itemIndex}
                  >
                    <b style={{ color: color }}>{item}</b>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
});

export default ChartJS;
