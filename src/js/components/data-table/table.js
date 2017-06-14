import React from 'react';

const Table = (props) => (
<table>
 <thead>
  <tr>
     <th>Month</th>
     <th>Savings</th>
  </tr>
 </thead>
 <tfoot>
  <tr>
     <td>Sum</td>
     <td>180</td>
  </tr>
 </tfoot>
 <tbody>
  <tr>
     <td>January</td>
     <td>100</td>
  </tr>
  <tr>
     <td>February</td>
     <td>80</td>
  </tr>
 </tbody>
</table>
)

export default Table;