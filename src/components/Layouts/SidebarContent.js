import React from 'react';
import { useTheme } from '../../context/Theme';
import { Link, NavLink } from 'react-router-dom';

function SidebarLink({ item }) {
	return (
		<NavLink
			to={item.link}
			className={({ isActive, isPending }) =>
				'text-slate-900 dark:text-white' + isPending ? 'pending' : isActive ? 'font-bold decoration-2' : ''
			}
		>
			{item.vneseName || item.name}{' '}
		</NavLink>
	);
}

export default function SidebarContent() {
	const { setDocSidebar, docSidebar } = useTheme();
	return (
		<div
			className='dark:text-white min-w-[250px] w-[250px] 
  min-h-[100vh] sticky top-0 z-3 pt-4 text-left px-2'
		>
			{docSidebar.map(o => {
				if (o.type === 'link') {
					return <SidebarLink key={o.name} item={o} />;
				}
				return null;
			})}
		</div>
	);
}
