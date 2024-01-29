import PropTypes from 'prop-types';
import Item from './Item';

const ListItems = ({ items, handleCheck, handleDelete }) => {
	return (
		<ul>
			{items.map((item) => {
				return (
					<Item
						key={item.id}
						item={item}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				);
			})}
		</ul>
	);
};

ListItems.propTypes = {
	items: PropTypes.array.isRequired,
	handleCheck: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};
export default ListItems;
