import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Topics from './components/topics';

const App = () => (
  <Router>
    <div>
      <h2>React Expense Manager</h2>
      <ul>
        <li><Link to="/side-projects/react-expense-manager/">Home</Link></li>
        <li><Link to="/side-projects/react-expense-manager/about">About</Link></li>
        <li><Link to="/side-projects/react-expense-manager/topics">Topics</Link></li>
      </ul>

      <Route exact path="/side-projects/react-expense-manager/" component={Home}/>
      <Route path="/side-projects/react-expense-manager/about" component={About}/>
      <Route path="/side-projects/react-expense-manager/topics" component={Topics}/>
    </div>
  </Router>
)

export default App;