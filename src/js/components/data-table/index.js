import React from 'react';

class DataTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "Vanakam"
    };
  }
  render() {
		return(
      <div className="data-table">
        Table
      </div>
		)
  }
}

export default DataTable;