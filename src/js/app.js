import React from 'react';

import Header from './components/header/index'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "Vanakam"
    };
  }
  render() {
    return(
      <div className="container">
        <Header />
        {/*<KPI />
        <Data />*/}
      </div>
    )
  }
}

export default App;