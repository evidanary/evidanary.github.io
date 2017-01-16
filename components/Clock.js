import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import * as rd3 from 'react-d3';

// Card will have following attributes
// Title, Tasks: [{label, value}]
// Value is in percentage
class Card extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  get chart() {
    let PieChart = rd3.PieChart;
    return (
      <div>
      <PieChart
      data={this.props.data}
      width={300}
      height={300}
      radius={50}
      innerRadius={42}
      showInnerLabels={false}
      title={this.props.title}
      />
      </div>
    );
  }

  get legend() {
    return this.props.data.map((val) => {
      return (
        <ul>
          <li>
            {val["label"]}
          </li>
        </ul>
      );
    });
  }

  render() {
    return (
      <div className="clock-card col-md-6 col-lg-4">
        {this.chart}<br/>
        {this.legend}<br/>
      </div>
    );
  }
}

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  get clocks() {
    let fiveAm = [
      {label: "Wake up and brush", value: 10/60*100},
      {label: "Meditate", value: 20/60*100},
      {label: "Journal", value: 15/60*100},
      {label: "Work", value: 15/60*100},
    ];

    let sixAm = [
      {label: "Work", value: 60/60*100},
    ];

    let sevenAm = [
      {label: "Work", value: 30/60*100},
      {label: "Walk Dog", value: 30/60*100},
    ];

    let eightAm = [
      {label: "Feed Dog", value: 15/60*100},
      {label: "Swim/Exercise", value: 35/60*100},
      {label: "Shower", value: 10/60*100},
    ];

    let nineAm = [
      {label: "Back Stretches and Core", value: 15/60*100},
      {label: "Breakfast", value: 20/60*100},
      {label: "Travel to work", value: 15/60*100},
      {label: "Setup at work", value: 10/60*100},
    ];

    let tenAm = [
      {label: "Work", value: 60/60*100},
    ];

    let elevenAm = [
      {label: "Work", value: 60/60*100},
    ];

    let noon = [
      {label: "Work", value: 60/60*100},
    ];

    let onePm = [
      {label: "Lunch", value: 45/60*100},
      {label: "News Websites", value: 15/60*100},
    ];

    let twoPm = [
      {label: "Answer Emails", value: 15/60*100},
      {label: "Work", value: 45/60*100},
    ];

    let threePm = [
      {label: "Work", value: 60/60*100},
    ];

    let fourPm = [
      {label: "Get Hot Bevarage", value: 15/60*100},
      {label: "Work", value: 45/60*100},
    ];

    let fivePm = [
      {label: "Work", value: 60/60*100},
    ];

    let sixPm = [
      {label: "Work", value: 30/60*100},
      {label: "Commute Home", value: 15/60*100},
      {label: "Cooking", value: 15/60*100},
    ];

    let sevenPm = [
      {label: "Cooking", value: 15/60*100},
      {label: "Dinner", value: 45/60*100},
    ];

    let eightPm = [
      {label: "Dinner", value: 15/60*100},
      {label: "Work", value: 45/60*100},
    ];

    let ninePm = [
      {label: "Work", value: 15/60*100},
      {label: "Walk Dog", value: 15/60*100},
      {label: "Write Tasks for tomorrow", value: 15/60*100},
      {label: "Sleep", value: 15/60*100},
    ];

    return (
      <div>
        <Card title="5 AM" data={fiveAm}/>
        <Card title="6 AM" data={sixAm}/>
        <Card title="7 AM" data={sevenAm}/>
        <Card title="8 AM" data={eightAm}/>
        <Card title="9 AM" data={nineAm}/>
        <Card title="10 AM" data={tenAm}/>
        <Card title="11 AM" data={elevenAm}/>
        <Card title="Noon" data={noon}/>
        <Card title="1 PM" data={onePm}/>
        <Card title="2 PM" data={twoPm}/>
        <Card title="3 PM" data={threePm}/>
        <Card title="4 PM" data={fourPm}/>
        <Card title="5 PM" data={fivePm}/>
        <Card title="6 PM" data={sixPm}/>
        <Card title="7 PM" data={sevenPm}/>
        <Card title="8 PM" data={eightPm}/>
        <Card title="9 PM" data={ninePm}/>
      </div>
    );
  }

  render(){
    return (
      <div>
        <h1>Clock</h1>
        <p>This is an expanded view over a day</p>
        {this.clocks}
      </div>
    );
  }
}
