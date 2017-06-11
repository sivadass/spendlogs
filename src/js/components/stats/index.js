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
        Stats
      </div>
		)
  }
}

export default Stats;