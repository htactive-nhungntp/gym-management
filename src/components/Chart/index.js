import React, { Component } from "react";
import { getdata } from "../../Helpers/HandleFirebase";
import d3 from 'react-d3-library'
import {ReactDOM} from "react-dom"


class Axis extends React.Component {

  componentDidMount(){
      this.renderAxis();
  }
  componentDidUpdate(){
      this.renderAxis();
  }
  renderAxis(){
      let axisType = `axis${this.props.orient}`;
      const axis = d3[axisType]()
          .scale(this.props.scale)
          .tickSize(-this.props.tickSize)
          .tickPadding(this.props.padding)
          .ticks(this.props.ticks)
          .tickFormat(this.props.format)
      
      d3.select(this.axisElement)
          .call(axis)
  }
  render(){
      return (
          <g className={this.props.className} ref={el => this.axisElement = el} transform={this.props.translate}>
          </g>
      )
  }
}

const XYAxisLineChart = ({scales,margins,svgDimensions}) => {
const xAxisProps = {
      orient: 'Bottom',
      translate: `translate(0,${svgDimensions.height - margins.bottom})`,
      scale: scales.xScale,
      tickSize: svgDimensions.height - margins.top - margins.bottom,
      ticks: 4,
      className: 'axisBottom',
      padding: 10,
      format: d3.format("")
  }
  const yAxisProps = {
      orient: 'Left',
      translate: `translate(${margins.left},0)`,
      scale: scales.yScale,
      tickSize: svgDimensions.width - margins.left - margins.right,
      ticks: 5,
      className: 'axisLeft',
      padding: 15,
      format: null
  }

  return <g>
      <Axis {...xAxisProps} />
    <Axis {...yAxisProps} />
  </g>
}
const XYAxisBarChart = ({scales,margins,svgDimensions}) => {
const xAxisProps = {
      orient: 'Bottom',
      translate: `translate(0,${svgDimensions.height - margins.bottom})`,
      scale: scales.xScaleMonth,
      tickSize: svgDimensions.height - margins.top - margins.bottom,
      ticks: 4,
      className: 'axisBottom',
      padding: 10,
      format: null
  }
  const yAxisProps = {
      orient: 'Left',
      translate: `translate(${margins.left},0)`,
      scale: scales.yScale,
      tickSize: svgDimensions.width - margins.left - margins.right,
      ticks: 5,
      className: 'axisLeft',
      padding: 15,
      format: null
  }

  return <g>
      <Axis {...xAxisProps} />
    <Axis {...yAxisProps} />
  </g>
}
/***************** Axis End ****************/

/***************** BarChart Start ****************/
class Bar extends React.Component {
  constructor(props){
      super(props);
      this.colorScale = d3.scaleLinear()
          .domain([0,this.props.yMaxValue])
          .range(['#999999','#333333']);

  }
  componentDidMount() {
      this.renderBar();
  }
  renderBar(){
      let node = this.refs.bar;
      const { scales , margins, svgDimensions, data} = this.props;
      const { xScale, yScale } = scales;
      const { height } = svgDimensions;

      let bar = d3.select(node).append("g");
      bar.attr("class","rect-group")
          .selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x",(d) => xScale(d.month))
          .attr("y",height - margins.bottom)
          .transition().duration(1500).ease(d3.easeElastic)
          .attr("x",(d) => xScale(d.month))
          .attr("y",(d) => yScale(d.income))
          .attr("width",xScale.bandwidth())
          .attr("height",(d) => height - yScale(d.income) - margins.bottom)
          .style("fill",(d) => this.colorScale(d.income))


      bar.attr("class","text-group")
          .selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .attr("x",(d)=> xScale(d.month))
          .attr("y",(d)=>height - margins.bottom)
          .transition().duration(1500).ease(d3.easeElastic)
          .text((d) => d.income)
          .attr("x",(d) => xScale(d.month) + xScale.bandwidth()/4)
          .attr("y",(d) => yScale(d.income) - 5)
          .style("fill","#333333")
          .style("font-size","12px")

  }

  componentWillReceiveProps(nextProps){
      let node = this.refs.bar;
      const { scales , margins, svgDimensions,data} = nextProps;
      const { xScale, yScale } = scales;
      const { height } = svgDimensions;

      let bar = d3.select(node).append("g");

      d3.select(".rect-group").remove();
      bar.attr("class","rect-group")
          .selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x",(d) => xScale(d.month))
          .attr("y",(d) => height - margins.bottom)
          .transition().duration(2500).ease(d3.easeElastic)
          .attr("x",(d) => xScale(d.month))
          .attr("y",(d) => yScale(d.income))
          .attr("width",xScale.bandwidth())
          .attr("height",(d) => height - yScale(d.income) - margins.bottom)
          .style("fill",(d) => this.colorScale(d.income));

      d3.select(".text-group").remove();
      bar.append("g")
          .attr("class","text-group")
          .selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .attr("x",(d)=> xScale(d.month))
          .attr("y",(d)=>height - margins.bottom)
          .transition().duration(2500).ease(d3.easeElastic)
          .text((d) => d.income)
          .attr("x",(d) => xScale(d.month) + xScale.bandwidth()/4)
          .attr("y",(d) => yScale(d.income) - 5)
          .style("fill","#333333")
          .style("font-size","12px")
    
  }
  render() {
      return (
          <g ref="bar"></g>
      )
  }
}
const BarChartComponent = ({data,margins,svgDimensions}) => {
 const yMaxValue = Math.max(...data.map(d => d.income));
 const months = [
          {month: "Jan"},{month: "Feb"},{month: "Mar"},{month: "Apr"},{month: "May"},{month: "Jun"},
          {month: "Jul"},{month: "Aug"},{month: "Sep"},{month: "Oct"},{month: "Nov"},{month: "Dec"}
      ];

 const xScale = d3.scaleBand()
              .domain(data.map(d => d.month))
              .range([margins.left,svgDimensions.width - margins.right])
              .padding(0.2);

 const xScaleMonth = d3.scaleBand()
          .domain(months.map((d) => d.month))
          .range([margins.left,svgDimensions.width - margins.right])

 const yScale = d3.scaleLinear()
              .domain([0,yMaxValue])
              .range([svgDimensions.height - margins.bottom,margins.top])
 const text = (
    <text transform="translate(60,150)rotate(-90)" fontSize="13">Monthly Income ($)</text>
  )
 const rectOverlay = <rect transform={`translate(${margins.left/2},${margins.top/2})`} className="rectOverlayBarChart" width={svgDimensions.width - margins.right } height={svgDimensions.height - margins.top} rx="5" ry="5"/> 
  return <svg width={svgDimensions.width} height={svgDimensions.height}>
           {rectOverlay}{text}
          <XYAxisBarChart scales={{xScaleMonth,yScale}} margins={margins} svgDimensions={svgDimensions}/>
          <Bar scales={{xScale,yScale}}  margins={margins} svgDimensions={svgDimensions} data={data} yMaxValue={yMaxValue} />
      </svg>
}
/***************** BarChart End ****************/

// Charts Component
export default class Charts extends React.Component {
constructor(){
  super();
  this.state = {
    lineChartData: [],
    barChartData: []
  }
}
componentWillMount(){
  this.setState({
    lineChartData: [
      {'year': 2012,'income':40},{'year': 2013,'income':80},{'year': 2014,'income':50},{'year': 2015,'income':100},
      {'year': 2016,'income':20},{'year': 2017,'income':120}
    ],
    barChartData: [
    {'month': 1,'income':20},{'month': 2,'income':30},{'month': 3,'income':100},{'month': 4,'income':50},{'month': 5,'income':60},
    {'month': 6,'income':80},{'month': 7,'income':30},{'month': 8,'income':90},{'month': 9,'income':5},{'month': 10,'income':23},
    {'month': 11,'income':76},{'month': 12,'income':49}
  ]
  })    
}
handleChangeYear(year) {
  let getData;
      if (year === "2012") {
          getData = [
              {'month': 1,'income':30},{'month': 2,'income':40},{'month': 3,'income':10},{'month': 4,'income':60},{'month': 5,'income':70},
              {'month': 6,'income':90},{'month': 7,'income':40},{'month': 8,'income':100},{'month': 9,'income':15},{'month': 10,'income':33},
              {'month': 11,'income':86},{'month': 12,'income':59}
          ];
      } else if (year === "2013") {
          getData = [
             {'month': 1,'income':20},{'month': 2,'income':30},{'month': 3,'income':100},{'month': 4,'income':50},{'month': 5,'income':60},
             {'month': 6,'income':80},{'month': 7,'income':30},{'month': 8,'income':90},{'month': 9,'income':5},{'month': 10,'income':23},
             {'month': 11,'income':76},{'month': 12,'income':49}
          ];
      } else if (year === "2014") {
          getData = [
             {'month': 1,'income':10},{'month': 2,'income':20},{'month': 3,'income':30},{'month': 4,'income':40},{'month': 5,'income':50},
             {'month': 6,'income':70},{'month': 7,'income':20},{'month': 8,'income':80},{'month': 9,'income':25},{'month': 10,'income':13},
             {'month': 11,'income':66},{'month': 12,'income':39}
          ];
      } else if (year === "2015") {
          getData = [             
             {'month': 1,'income':35},{'month': 2,'income':16},{'month': 3,'income':67},{'month': 4,'income':13},{'month': 5,'income':44},
             {'month': 6,'income':20},{'month': 7,'income':39},{'month': 8,'income':120},{'month': 9,'income':55},{'month': 10,'income':93},
             {'month': 11,'income':16},{'month': 12,'income':59}
          ];
      } else if (year === "2016") {
          getData = [
            {'month': 1,'income':20},{'month': 2,'income':30},{'month': 3,'income':100},{'month': 4,'income':50},{'month': 5,'income':60},
            {'month': 6,'income':80},{'month': 7,'income':30},{'month': 8,'income':90},{'month': 9,'income':5},{'month': 10,'income':23},
            {'month': 11,'income':76},{'month': 12,'income':49} 
          ];
      } else if (year === "2017") {
          getData = [
            {'month': 1,'income':120},{'month': 2,'income':60},{'month': 3,'income':110},{'month': 4,'income':55},{'month': 5,'income':20},
            {'month': 6,'income':60},{'month': 7,'income':60},{'month': 8,'income':50},{'month': 9,'income':52},{'month': 10,'income':63},
            {'month': 11,'income':36},{'month': 12,'income':19} 
          ];
      }
      this.setState({
          barChartData: getData
      })
}
render() {
  const margins = { top:50, right: 100, bottom: 50, left: 100},
       svgDimensions = { height: 200 , width: 200 };
  return (
    <div className="chart">
              <div className="barChart">
                <BarChartComponent margins={margins} svgDimensions={svgDimensions} data={this.state.barChartData} />
              </div>
      </div>
  )
}
}

// const mountingPoint = document.createElement('div');
// mountingPoint.className = 'react-app';
// document.body.appendChild(mountingPoint);

// ReactDOM.render(
// <Charts />,
// mountingPoint
// );


  // render() {
  //   return (
  //     <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
  //       <div className="col-lg-10">
  //         <div className="charts-single-pro shadow-reset nt-mg-b-30">
  //           <div className="alert-title">
  //             <h2>Bar Chart</h2>
  //             <div id="container" style={{ width: "75%" }}>
  //               <canvas id="canvas" />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
// }
