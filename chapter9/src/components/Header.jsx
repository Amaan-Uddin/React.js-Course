import PropTypes from 'prop-types';

const Header = ({ title }) => {
	return (
		<header>
			<h1>{title}</h1>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string,
};

Header.defaultProps = {
	title: 'Grocery List',
};

export default Header;
