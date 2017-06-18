import React from 'react';

class FormControl extends React.Component{
  constructor(props) {
    super(props);
  }
  checkInput(event){
    let element = event.target
    if(element.value.length > 0){
      element.classList.add('has-value');
    }else{
      element.classList.remove('has-value');
    }
  }
  render() {
    // Check for input type
    let inputType;
    switch(this.props.type){
      case 'text' :
        inputType = <input className="form-control" type="text" onBlur={this.checkInput.bind(this)}/>;
        break;
      case 'password' :
        inputType = <input className="form-control" type="password" onBlur={this.checkInput.bind(this)}/>;
        break;
      case 'number' :
        inputType = <input className="form-control" type="number" onBlur={this.checkInput.bind(this)}/>;
        break;
      case 'textarea' : 
        inputType = <textarea className="form-control" onBlur={this.checkInput.bind(this)}></textarea>;
        break;
      case 'select' :
        inputType = <select className="form-control" onBlur={this.checkInput.bind(this)}>{this.props.children}</select>;
        break;
    }
    return(
      <div className="input-group">
        {inputType}
        <label className="form-label">{this.props.label}</label>
      </div>
    )
  }
}

export default FormControl;