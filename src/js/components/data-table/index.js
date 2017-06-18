import React from 'react';
import Filter from './filter';
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
        <Filter />
        <Table />
      </div>
		)
  }
}

export default DataTable;