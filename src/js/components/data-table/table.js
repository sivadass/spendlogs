import React from 'react';

const Table = (props) => (
<table className="table">
 <thead>
  <tr>
     <th className="data-category">&nbsp;</th>
     <th className="data-payee">Payee</th>
     <th className="data-payee">Date</th>
     <th className="data-comment">Comment</th>
     <th className="data-amount">Amount</th>
  </tr>
 </thead>
 <tbody>
   <tr>
     <td className="data-category"><i className="material-icons data-category-icon">lightbulb_outline</i></td>
     <td className="data-payee">TNEB</td>
     <td className="data-date">10 AM, Wed, 05/12/17</td>
     <td className="data-comment">Check reading next month</td>
    <td className="data-amount currency-symbol">1350</td>
  </tr>
  <tr>
     <td className="data-category"><i className="material-icons data-category-icon">wifi</i></td>
     <td className="data-payee">Airtel Broadband</td>
     <td className="data-date">10.15 AM, Wed, 05/12/17</td>
     <td className="data-comment">Reduce usage of data.</td>
    <td className="data-amount currency-symbol">999</td>
  </tr>
  <tr>
     <td className="data-category"><i className="material-icons data-category-icon">local_offer</i></td>
     <td className="data-payee">Otto</td>
     <td className="data-date">8 PM, Tue, 04/12/17</td>
     <td className="data-comment">Two Shirts and one Pant.</td>
    <td className="data-amount currency-symbol">1350</td>
  </tr>

  <tr>
     <td className="data-category"><i className="material-icons data-category-icon">book</i></td>
     <td className="data-payee">Flipkart</td>
     <td className="data-date">10 AM, Mon, 03/12/17</td>
     <td className="data-comment">Deepwork and ReWork</td>
    <td className="data-amount currency-symbol">1350</td>
  </tr>
  <tr>
     <td className="data-category"><i className="material-icons data-category-icon">restaurant_menu</i></td>
     <td className="data-payee">Aasife and Brothers</td>
     <td className="data-date">10 PM, Sunday, 30/11/17</td>
     <td className="data-comment">3 Mutton Briyani</td>
    <td className="data-amount currency-symbol">675</td>
  </tr>
 </tbody>
</table>
)

export default Table;