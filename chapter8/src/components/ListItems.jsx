import PropTypes from 'prop-types';
import Item from './Item';

const ListItems = ({ items, handleCheck, handleDelete }) => {
	return (
		<ul>
			{items.map((item) => (
				<Item
					key={item.id}
					item={item}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	);
};

ListItems.propTypes = {
	items: PropTypes.array,
	handleCheck: PropTypes.func,
	handleDelete: PropTypes.func,
};
export default ListItems;
