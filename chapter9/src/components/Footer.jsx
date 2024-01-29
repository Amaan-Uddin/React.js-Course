import PropTypes from 'prop-types';

const Footer = ({ length }) => {
	return (
		<footer>
			{length} list {length === 1 ? 'item' : 'items'}
		</footer>
	);
};

Footer.propTypes = { length: PropTypes.number };
export default Footer;
