import React from 'react';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/index';
import DocHooksPage from '../pages/docs/hooks.jsx';
import InstallationPage from '../pages/docs/installation.jsx';
import ReactDocsPage from '../pages/docs/index.jsx';
import AppPage from '../pages/app/index.jsx';
import AppTask from '../pages/app/tasks/index.jsx';
import DetailTask1 from '../pages/app/tasks/bai-1.jsx';
import DetailTask2 from '../pages/app/tasks/bai-2.jsx';

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
			<Route path='/app'>
				<Route index element={<AppPage />} />
				<Route path='tasks' element={<AppTask />} />
				<Route path='tasks/bai-1' element={<DetailTask1 />} />
				<Route path='tasks/bai-2' element={<DetailTask2 />} />
			</Route>

			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}
