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
					<p>No Items</p>
				)}
			</section>
		</main>
	);
};

Content.propTypes = {
	items: PropTypes.array.isRequired,
	handleCheck: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};
export default Content;
