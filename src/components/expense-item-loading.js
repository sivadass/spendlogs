import React from 'react';

const ExpenseItemLoading = () => {
  return [
    <tr><td colSpan="5" className="loading-item">Loading expenses...</td></tr>,
    <tr><td colSpan="5" className="loading-item">Loading expenses...</td></tr>,
    <tr><td colSpan="5" className="loading-item">Loading expenses...</td></tr>
  ]
};

export default ExpenseItemLoading;