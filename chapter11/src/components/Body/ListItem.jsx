import { FaTrashAlt } from 'react-icons/fa';

const ListItem = ({ item, handleCheck, handleDelete }) => {
	return (
		<li className="item d-flex align-items-center justify-content-between my-2 rounded-2 bg-light p-3 ">
			<input
				type="checkbox"
				name="checkItem"
				id="checkItem"
				className="form-check-input checkbox"
				checked={item.checked}
				onChange={() => handleCheck(item.id)}
			/>
			<h3
				className="w-100 px-4 mb-0"
				style={item.checked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
			>
				{item.value}
			</h3>
			<FaTrashAlt role="button" className="trash" onClick={() => handleDelete(item.id)} />
		</li>
	);
};
export default ListItem;
