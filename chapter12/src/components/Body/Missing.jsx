import { Link } from 'react-router-dom';
const Missing = () => {
	return (
		<main>
			<h2>404 not found</h2>
			<p>sorry to dissapoint</p>
			<Link to={'/'}>go back to home</Link>
		</main>
	);
};
export default Missing;
