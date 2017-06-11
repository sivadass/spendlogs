import React from 'react';

import Header from './components/header/index';
import Stats from './components/stats/index';
import DataTable from './components/data-table/index';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="container">
        <Header />
        <Stats />
        <DataTable />
      </div>
    )
  }
}

export default App;