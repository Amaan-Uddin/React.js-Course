import ListItem from './ListItem';

const List = ({ items, handleCheck, handleDelete }) => {
	return (
		<ul className="px-4 py-3">
			{items.map((item) => {
				return <ListItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />;
			})}
		</ul>
	);
};
export default List;
