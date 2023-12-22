import React from 'react';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/index';
import DocHooksPage from '../pages/docs/hooks.jsx';
import InstallationPage from '../pages/docs/installation.jsx';
import ReactDocsPage from '../pages/docs/index.jsx';

import NotFoundPage from '../pages/404';
export default function AppRouteController() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomePage />,
		},
	]);
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/docs'>
				<Route index element={<ReactDocsPage />} />
				<Route path='installation' element={<InstallationPage />} />
				<Route path='hooks' element={<DocHooksPage />} />
			</Route>

			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}
