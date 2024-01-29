// self defined array functional component
const Content = () => {
	// create a function to return a random guest
	const handleGuest = () => {
		return Math.floor(Math.random() * 10);
	};

	// create a function to execute on click
	const handleClick = () => {
		console.log("You've clicked the button");
	};

	// function to return the event details and target on click
	const handleClickEvent = (e) => {
		console.log(e, e.target);
	};

	// in react there are also doubleClick events
	return (
		<main>
			<p onDoubleClick={handleClick}>Guest no:{handleGuest()}</p>
			<button onClick={handleClick}>Click</button>
			<button onClick={(e) => handleClickEvent(e)}>Click</button>
		</main>
	);
};

export default Content;
