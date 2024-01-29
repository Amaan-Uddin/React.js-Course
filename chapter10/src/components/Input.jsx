const Input = ({ colorValue, setColorValue }) => {
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<label htmlFor="inputColor">Color</label>
			<input
				type="text"
				placeholder="Enter a Color"
				required
				autoFocus
				value={colorValue}
				onChange={(e) => setColorValue(e.target.value)}
			/>
		</form>
	);
};
export default Input;
