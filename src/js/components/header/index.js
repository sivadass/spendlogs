import React from 'react';
import MenuButton from './menu-button';
import Logo from './logo';
import AddButton from './add-button';
import SearchButton from './search-button';
import MoreButton from './more-button';
import Modal from '../modal'

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      addModal: false
    };
		this.openAddModal = this.openAddModal.bind(this);
		this.closeAddModal = this.closeAddModal.bind(this);
  }
	openAddModal(){
		this.setState({
			addModal: true
		})
	}
	closeAddModal(){
		this.setState({
			addModal: false
		})
	}
  render() {
		return(
			<header>
				<div className="left-links">
					<MenuButton />
					<Modal modalActive={this.state.addModal} closeAddModal={this.closeAddModal}/>
					<Logo />
				</div>
				<div className="right-links">
					<AddButton openModal={this.openAddModal}/>
					<SearchButton />
					<MoreButton />
				</div>
			</header>
		)
  }
}

export default Header;