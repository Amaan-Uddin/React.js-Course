import PropTypes from 'prop-types';

const SearchItem = ({ search, setSearch }) => {
	return (
		<form className="searchForm" onSubmit={(e) => e.preventDefault()}>
			<label htmlFor="searchbox"></label>
			<input
				autoComplete="off"
				type="text"
				id="searchbox"
				name="searchbox"
				placeholder="Search Item..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
};
SearchItem.propTypes = {
	search: PropTypes.string,
	setSearch: PropTypes.func,
};
export default SearchItem;
