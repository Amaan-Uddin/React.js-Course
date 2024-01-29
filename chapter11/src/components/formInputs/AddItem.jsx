import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	return (
		<form className="d-flex gap-3" onSubmit={handleSubmit}>
			<input
				autoFocus
				autoComplete="off"
				type="text"
				name="newItem"
				id="newItem"
				className="form-control fs-5"
				placeholder="Add Item.."
				value={newItem}
				onChange={(e) => {
					setNewItem(e.target.value);
				}}
			/>
			<button type="submit" className="btn btn-primary py-2">
				<FaPlus className="plus" />
			</button>
		</form>
	);
};
export default AddItem;
