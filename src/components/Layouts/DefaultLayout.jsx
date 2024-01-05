import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import SidebarApp from './app/SidebarApp';
import SidebarContent from './SidebarContent';

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
			<div className='min-h-[100vh] w-full dark:bg-slate-800 flex'>
				<SidebarContent />
				{children}
			</div>
		</div>
	);
}
function AppLayouts({ children }) {
	return (
		<div className='app-layout flex'>
			<SidebarApp />
			{children}
		</div>
	);
}

export default function DefaultLayout({ children }) {
	const location = useLocation();
	const docRegex = /^\/docs/;
	const appRegex = /^\/app/;
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
			)}
		</>
	);
}
