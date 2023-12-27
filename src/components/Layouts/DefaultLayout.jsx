import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import SidebarApp from './app/SidebarApp';

function FallbackLayout({ children }) {
	return (
		<div className='docs-layout'>
			<Header />
			{children}
		</div>
	);
}
function DocsLayout({ children }) {
	return (
		<div className='docs-layout'>
			<Header />
			{children}
		</div>
	);
}
function AppLayouts({ children }) {
	return (
		<div className='app-layout'>
			<SidebarApp />
			{children}
		</div>
	);
}

export default function DefaultLayout({ children }) {
	const location = useLocation();
	const docRegex = /^\/docs\//;
	const appRegex = /^\/apps\//;
	const isDoc = docRegex.test(location.pathname);
	const isApp = appRegex.test(location.pathname);
	return (
		<>
			{isDoc ? (
				<DocsLayout children={children} />
			) : isApp ? (
				<AppLayouts children={children} />
			) : (
				<FallbackLayout children={children} />
			)}{' '}
		</>
	);
}
