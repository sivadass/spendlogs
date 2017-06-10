import React from 'react';
import MenuButton from './menu-button';
import AddButton from './add-button';
import SearchButton from './search-button';
import MoreButton from './more-button';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "Vanakam"
    };
  }
  render() {
		return(
			<header>
				<MenuButton />
				<span>Expense Manager</span>
				<AddButton />
				<SearchButton />
				<MoreButton />
			</header>
		)
  }
}

export default Header;