import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header/Header';

const Layout = () => {

	const isAuth = useSelector((state) => !!state.user.uid);

	if (!isAuth) {
		return <Navigate to="/login" replace />;
	}

	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>

		</>
	);
};

export default Layout;
