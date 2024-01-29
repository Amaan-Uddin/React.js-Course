import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';

const Item = ({ item, handleCheck, handleDelete }) => {
	return (
		<li className="item">
			<input
				type="checkbox"
				name="check-item"
				onChange={() => handleCheck(item.id)}
			/>
			<label
				htmlFor="check-item"
				style={item.checked ? { textDecoration: 'line-through' } : null}
			>
				{item.value}
			</label>
			<FaTrashAlt role="button" onClick={() => handleDelete(item.id)} />
		</li>
	);
};

Item.propTypes = {
	item: PropTypes.object.isRequired,
	handleCheck: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};
export default Item;
