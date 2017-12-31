import React from 'react';
import moment from 'moment';

class ExpenseItem extends React.Component {
  render(){
    let data =  this.props.data;
    return(
      <tr>
        <td className="data-category">
          <i className="material-icons category-icon">{this.props.setCategoryIcon(data.category)}</i>
        </td>
        <td className="data-payee"><p>{data.payee}</p> <p className="data-date-mobile">{moment(data.date).format("hh.mm A, DD/MM/YYYY")}</p></td>
        <td className="data-date">{moment(data.date).format("hh.mm A, DD/MM/YYYY")}</td>
        <td className="data-comment">{data.comment}</td>
        <td className="data-amount text-ar currency-sign">{data.amount}</td>
      </tr>
    )
  }
}

export default ExpenseItem;