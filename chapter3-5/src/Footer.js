const Footer = () => {
	// get the current date
	const date = new Date(); // create a Date object
	return (
		<footer>
			<div>Copyright &copy; {date.getFullYear()}</div>
		</footer>
	);
};

export default Footer;
