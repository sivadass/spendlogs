import React from 'react';

const AddButton = (props) => (
  <button className="cta-button" type="button" onClick={props.openModal}><i className="material-icons">add_circle_outline</i> ADD</button> 
)

export default AddButton;