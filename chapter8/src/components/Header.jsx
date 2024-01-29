import PropTypes from 'prop-types';
import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>{this.props.title}</h1>
			</header>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

Header.defaultProps = {
	title: 'Grocery List',
};

export default Header;
