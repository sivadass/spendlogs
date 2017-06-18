import React from 'react';

const Filter = (props) => (
  <div className="filter">
    <ul className="pre-defined-filter">
      <li><a className="filter-button active" href="#">Today</a></li>
      <li><a className="filter-button" href="#">This Week</a></li>
      <li><a className="filter-button" href="#">This Month</a></li>
    </ul>
    <div className="custom-filter">
      <div className="form-group">
        <input className="form-control" type="text" id="from-date" placeholder="From Date"/>
        <label className="form-label" htmlFor="from-date">From Date <i className="material-icons">event</i></label>
      </div>
      <div className="form-group">
        <input className="form-control" type="text" id="to-date" placeholder="To Date"/>
        <label className="form-label" htmlFor="to-date">To Date <i className="material-icons">event</i></label>
      </div>
    </div>
  </div>
)

export default Filter;