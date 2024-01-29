import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	const myRef = useRef(null);
	return (
		<form className="addForm" onSubmit={handleSubmit}>
			<label htmlFor="add-item">Add Item</label>
			<input
				autoFocus
				autoComplete="off"
				type="text"
				name="add-item"
				id="add-item"
				placeholder="Add Item..."
				value={newItem}
				onChange={(event) => {
					setNewItem(event.target.value);
				}}
				ref={myRef}
			/>
			{/* now the input has become a controlled input and we are changing the 'value' of the input when 
            the change event occures */}
			<button
				type="submit"
				aria-label="Add Item"
				onClick={() => myRef.current.focus()} // apply focus to the current dom element that has a ref of myRef
			>
				<FaPlus />
			</button>
		</form>
	);
};

AddItem.propTypes = {
	newItem: PropTypes.string,
	setNewItem: PropTypes.func,
	handleSubmit: PropTypes.func,
};
export default AddItem;
