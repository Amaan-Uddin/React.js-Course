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
			<FaTrashAlt onClick={() => handleDelete(item.id)} role="button" />
		</li>
	);
};

Item.propTypes = {
	item: PropTypes.object,
	handleCheck: PropTypes.func,
	handleDelete: PropTypes.func,
};
export default Item;
