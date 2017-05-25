import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <header className="header">
          <h1>Project under construction!</h1>
        </header>
        <div className="main">
          <p>The project is in design phase, please check the folder named <strong>design</strong> in root to view the progression as mocks.</p>
        </div>
        <footer className="footer">
          &copy; React Expense Manager 2017
        </footer>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);