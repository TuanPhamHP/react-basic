import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/index';
import NotFoundPage from '../pages/404';
export default function AppRouteController() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	);
}
