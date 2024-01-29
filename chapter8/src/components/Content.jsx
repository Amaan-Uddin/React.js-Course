import PropTypes from 'prop-types';
import ListItems from './ListItems';

const Content = ({ items, handleCheck, handleDelete }) => {
	return (
		<main>
			<section>
				{items.length ? (
					<ListItems
						items={items}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				) : (
					<p>No items</p>
				)}
			</section>
		</main>
	);
};

Content.propTypes = {
	items: PropTypes.array,
	handleCheck: PropTypes.func,
	handleDelete: PropTypes.func,
};

export default Content;
