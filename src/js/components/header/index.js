import React from 'react';
import MenuButton from './menu-button';
import Logo from './logo';
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
				<div className="left-links">
					<MenuButton />
					<Logo />
				</div>
				<div className="right-links">
					<AddButton />
					<SearchButton />
					<MoreButton />
				</div>
			</header>
		)
  }
}

export default Header;