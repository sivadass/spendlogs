import React from 'react';
import DataFilter from './data-filter';
import Table from './table';

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
        <DataFilter />
        <Table />
      </div>
		)
  }
}

export default DataTable;