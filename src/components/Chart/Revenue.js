import React, { Component } from "react";

import { getdata } from "../../Helpers/HandleFirebase";

export default class Revenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      series: [
        { num: "1", name: "January" },
        { num: "2", name: "February" },
        { num: "3", name: "March" },
        { num: "4", name: "April" },
        { num: "5", name: "May" },
        { num: "6", name: "June" },
        { num: "7", name: "July" },
        { num: "8", name: "August" },
        { num: "9", name: "September" },
        { num: "11", name: "October" },
        { num: "11", name: "November" },
        { num: "12", name: "December" }
      ],
      labels: ["Revenue"],
      colors: ["#3957bf"]
    };
  }

  async componentDidMount() {
    await this.LoadData(this.state.series);
  }

  LoadData = StringOfDate => {
    StringOfDate.map(async month => {
      let members = await this.LoadObject("members");
      let billsDay = await this.LoadObject("billsDay");
      let billsMonth = await this.LoadObject("billsMonth");

      let filterBillsDay = billsDay.filter(
        ob => this.returnMonth(ob.createAt) === month.num
      );
      let filterBillsMonth = billsMonth.filter(ob => ob.month === month.num);
      let revenue =
        filterBillsDay.length * 10000 + filterBillsMonth.length * 170000;
      const da = [revenue];
      this.setState({
        data: [da, ...this.state.data]
      });
    });
  };

  LoadObject = async arr => {
    let object = await getdata(arr);
    return object;
  };

  returnMonth = date => {
    let event = date;
    let index1 = event.indexOf("/");
    let index2 = event.lastIndexOf("/");
    return event.slice(index1 + 1, index2);
  };

  render() {
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
}

class Legend extends Component {
  render() {
    let labels = this.props.labels,
      colors = this.props.colors;

    return (
      <div className="Legend">
        {labels.map(function(label, labelIndex) {
          return (
            <div key={labelIndex}>
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
}

class Charts extends Component {
  render() {
    let self = this,
      data = this.props.data,
      stacked = this.props.grouping === "stacked" ? true : false,
      max = 0;
    for (let i = data.length; i--; ) {
      for (let j = data[i].length; j--; ) {
        if (data[i][j] > max) {
          max = data[i][j];
        }
      }
    }

    return (
      <div className={"Charts" + (this.props.horizontal ? " horizontal" : "")}>
        {data.length > 0
          ? data.map(function(serie, serieIndex) {
              let sum;
              return (
                <div
                  className={"Charts--serie "}
                  key={serieIndex}
                  style={{
                    height: self.props.height ? self.props.height : "auto"
                  }}
                >
                  <label>{self.props.labels[serieIndex].name}</label>
                  {serie.length > 0
                    ? serie.map(function(item, itemIndex) {
                        var color = self.props.colors[itemIndex],
                          style,
                          size = (item / (stacked ? sum : max)) * 100;
                        style = {
                          backgroundColor: color
                        };

                        if (self.props.horizontal) {
                          style["width"] = 80 + "px";
                        } else {
                          style["height"] = size + "%";
                        }
                        return (
                          <div
                            className={"Charts--item "}
                            style={style}
                            key={itemIndex}
                          >
                            <b style={{ color: color }}>
                              {item
                                .toFixed(2)
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                            </b>
                          </div>
                        );
                      })
                    : "sss"}
                </div>
              );
            })
          : ""}
      </div>
    );
  }
}
