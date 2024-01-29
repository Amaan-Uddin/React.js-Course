const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<footer>
			<div>copyright &copy; {date}</div>
		</footer>
	);
};

export default Footer;
