import React from 'react';
import moment from 'moment';

const ExpenseItem = (data, setCategoryIcon) => 
console.log(data)(
  <tr>
    <td className="data-category">
      <i className="material-icons category-icon">{setCategoryIcon(data.category)}</i>
    </td>
    <td className="data-payee"><p>{data.payee}</p> <p className="data-date-mobile">{moment(data.date).format("hh.mm A, DD/MM/YYYY")}</p></td>
    <td className="data-date">{moment(data.date).format("hh.mm A, DD/MM/YYYY")}</td>
    <td className="data-comment">{data.comment}</td>
    <td className="data-amount text-ar currency-sign">{data.amount}</td>
  </tr>
);

export default ExpenseItem;