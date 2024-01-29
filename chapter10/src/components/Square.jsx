const Square = ({ colorValue }) => {
	return (
		<section className="square" style={{ backgroundColor: colorValue }}>
			<p style={{ color: 'black' }}>{colorValue ? colorValue : 'Enter a color...'}</p>
		</section>
	);
};

Square.defaultProps = {
	colorValue: 'Enter a color...',
};

export default Square;
