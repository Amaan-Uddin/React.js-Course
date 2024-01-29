const Content = () => {
	// let's create a function to return a random number
	const handleGuestNumber = () => {
		return Math.floor(Math.random() * 10);
	};
	return (
		<main>
			<p>Guest no: {handleGuestNumber()}</p>
		</main>
	);
};

export default Content;
