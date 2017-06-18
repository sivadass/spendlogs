import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class Filter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      //birthday: null
    }
    //this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
  }
  render(){
    return(
      <div className="filter">
        <ul className="pre-defined-filter">
          <li><a className="filter-button active" href="#">Today</a></li>
          <li><a className="filter-button" href="#">This Week</a></li>
          <li><a className="filter-button" href="#">This Month</a></li>
        </ul>
        <div className="custom-filter">
          <div className="form-group">
            <i className="material-icons">event</i>
            <DayPickerInput
              placeholder="MM/DD/YYYY"
              className="form-control"
              //onDayChange={day => console.log(day)}
            />
          </div>
          <div className="form-group">
            <i className="material-icons">event</i>
            <DayPickerInput
              placeholder="MM/DD/YYYY"
              className="form-control"
              //onDayChange={day => console.log(day)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Filter;