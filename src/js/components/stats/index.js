import React from 'react';
import Trend from 'react-trend';
import Graph from './graph';

class Stats extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "Vanakam"
    };
  }
  render() {
		return(
      <div className="stats">
        <div className="total-expense">
          <p className="total-expense-label">SPENDING THIS MONTH</p>
          <h1 className="total-expense-amount currency-symbol">16,500</h1>
        </div>
        <div className="graph">
          <Graph/>
        </div>
      </div>
		)
  }
}

export default Stats;