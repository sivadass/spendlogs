import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <header className="header">
          <h1>Welcome!</h1>
        </header>
        <div className="main">
          <p>App contents.</p>
        </div>
        <footer className="footer">
          &copy; Acme Ltd. 2017
        </footer>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);