import Footer from './Foot/Footer';
import Header from './Head/Header';
import Nav from './Head/Nav';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
	return (
		<>
			<Header title={'ReactJS Blog'} />
			<Nav search={search} setSearch={setSearch} />
			<div className="layout">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};
export default Layout;
