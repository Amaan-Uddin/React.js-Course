const Footer = ({ itemNumber }) => {
	return (
		<footer className="fs-5">
			{itemNumber === 1 ? (
				<p>
					<span className=" text-primary">{itemNumber}</span> Item in cart
				</p>
			) : (
				<p>
					<span className="text-primary">{itemNumber}</span> Items in cart
				</p>
			)}
		</footer>
	);
};
export default Footer;
