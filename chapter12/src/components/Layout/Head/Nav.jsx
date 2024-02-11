import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
	return (
		<nav className="navigation">
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					type="text"
					id="search"
					placeholder="Search for a post..."
					className="form-control"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</form>
			<ul>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'post'}>Post</Link>
				</li>
				<li>
					<Link to={'about'}>About</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Nav;
