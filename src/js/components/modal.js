import React from 'react';
import FormControl from './form-control';

class Modal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false
    }
  }
  render() {
    return(
      <div className={this.props.modalActive ? "modal active" : "modal"}>
        <div className="modal-body">
          <button className="close" onClick={this.props.closeAddModal}>&times;</button>
          <div>
            <FormControl type={"text"} label={"Payee"} />
            <FormControl type={"select"} label={"Category"}>
              <option></option>
              <option>Clothes</option>
              <option>Electricity</option>
              <option>Food</option>
            </FormControl>
            <FormControl type={"number"} label={"Amount"} />
            <FormControl type={"textarea"} label={"Comment"} />
          </div>
          {/*<form>
            <p>* fileds are required!</p>
            <div className="form-group">
              <input className="form-control" type="text" id="payee" placeholder="Enter Payee"/>
              <label className="form-label" htmlFor="payee">Payee*</label>
            </div>
            <div className="form-group">
              <input className="form-control" type="number" id="amount" placeholder="Enter Amount"/>
              <label className="form-label" htmlFor="amount">Amount*</label>
            </div>
            <div className="form-group">
              <select className="form-control" name="catgeory" id="category" placeholder="Select Category">
                <option value="1">Food</option>
                <option value="2">Clothes</option>
                <option value="3">Mobile</option>
                <option value="4">Internet</option>
                <option value="5">Medicine</option>
              </select>
              <label className="form-label" htmlFor="category">Category</label>
            </div>
            <div className="form-group">
              <input className="form-control" type="date" id="date" placeholder="Choose Date"/>
              <label className="form-label" htmlFor="payee">Date</label>
            </div>
            <div className="form-group">
              <input className="form-control" type="text" id="comment" placeholder="Add Comment"/>
              <label className="form-label" htmlFor="payee">Comment</label>
            </div>
            <div className="form-action">
              <button type="reset">RESET</button>
              <button type="submit">SAVE</button>
            </div>
          </form>*/}
        </div>
      </div>
    )
  }
}

export default Modal;