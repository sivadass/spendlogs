import React from 'react';

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
          D3.JS Graph will come here..!
        </div>
      </div>
		)
  }
}

export default Stats;