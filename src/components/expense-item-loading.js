import React from 'react';

const ExpenseItemLoading = () => {
  return [
    <tr key={1}><td colSpan="5" className="loading-item"></td></tr>,
    <tr key={2}><td colSpan="5" className="loading-item"></td></tr>,
    <tr key={3}><td colSpan="5" className="loading-item"></td></tr>
  ]
};

export default ExpenseItemLoading;