import React from 'react';

const Table = (props) => (
<table className="table">
 <thead>
  <tr>
     <th colSpan="2" className="data-payee">Payee</th>
     <th className="data-payee">Date</th>
     <th className="data-comment">Comment</th>
     <th className="data-amount">Amount</th>
  </tr>
 </thead>
 <tbody>
   <tr>
     <td className="data-category">Electricity</td>
     <td className="data-payee">TNEB</td>
     <td className="data-date">10 AM, Wed, 05/12/17</td>
     <td className="data-comment">Check reading next month</td>
    <td className="data-amount">1350</td>
  </tr>
  <tr>
     <td className="data-category">Internet</td>
     <td className="data-payee">Airtel Broadband</td>
     <td className="data-date">10.15 AM, Wed, 05/12/17</td>
     <td className="data-comment">Reduce usage of data.</td>
    <td className="data-amount">999</td>
  </tr>
  <tr>
     <td className="data-category">Clothes</td>
     <td className="data-payee">Otto</td>
     <td className="data-date">8 PM, Tue, 04/12/17</td>
     <td className="data-comment">Two Shirts and one Pant.</td>
    <td className="data-amount">1350</td>
  </tr>

  <tr>
     <td className="data-category">Books</td>
     <td className="data-payee">Flipkart</td>
     <td className="data-date">10 AM, Mon, 03/12/17</td>
     <td className="data-comment">Deepwork and ReWork</td>
    <td className="data-amount">1350</td>
  </tr>
  <tr>
     <td className="data-category">Food</td>
     <td className="data-payee">Aasife and Brothers</td>
     <td className="data-date">10 PM, Sunday, 30/11/17</td>
     <td className="data-comment">3 Mutton Briyani</td>
    <td className="data-amount">675</td>
  </tr>
 </tbody>
</table>
)

export default Table;