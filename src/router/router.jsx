import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from '../components/ProtectedRoute';
import Registration from '../pages/Registration';
import ResetPassword from '../pages/ResetPassword';
import Settings from '../pages/Settings';
import TechStack from '../pages/TechStack';
import Architecture from '../pages/Architecture';
import Projects from '../pages/Projects';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
				<Route index element={<Home />} />
				<Route
					path="home"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route
					path="tech-stack"
					element={
						<ProtectedRoute>
							<TechStack />
						</ProtectedRoute>
					}
				/>
				<Route
					path="architecture"
					element={
						<ProtectedRoute>
							<Architecture />
						</ProtectedRoute>
					}
				/>
				<Route
					path="projects"
					element={
						<ProtectedRoute>
							<Projects />
						</ProtectedRoute>
					}
				/>
				<Route
					path="settings"
					element={
						<ProtectedRoute>
							<Settings />
						</ProtectedRoute>
					}
				/>
			</Route>
			<Route path="/login" element={<Login />} errorElement={<ErrorPage />} />
			<Route path="/reg" element={<Registration />} errorElement={<ErrorPage />} />
			<Route path="/reset-password" element={<ResetPassword />} errorElement={<ErrorPage />} />
		</>
	)
);

export default router;

