import React from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

class ExpenseItem extends React.Component {
  // Goto Details Page
  gotoDetails(id){
    console.log('hi...');
    this.props.history.push(`/expense-details/${ id }`);
  }
  render(){
    let data =  this.props.data;
    return(
      <tr onClick={this.gotoDetails.bind(this, data.id)}>
        <td className="data-category">
          <i className="material-icons category-icon">{this.props.setCategoryIcon(data.category)}</i>
        </td>
        <td className="data-payee"><p>{data.payee}</p> <p className="data-date-mobile">{moment(data.date_added).format("hh:mm A, DD/MM/YYYY")}</p></td>
        <td className="data-date">{moment(data.date_added).format("hh:mm A, DD/MM/YYYY")}</td>
        <td className="data-comment">{data.comments}</td>
        <td className="data-amount text-ar currency-sign">{data.amount}</td>
      </tr>
    )
  }
}

export default withRouter(ExpenseItem);