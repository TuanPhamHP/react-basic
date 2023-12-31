import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';

function SidebarLink({ item }) {
	return (
		<li>
			<NavLink
				to={item.link}
				className='flex gap-2 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
			>
				<svg
					className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='currentColor'
					viewBox='0 0 22 21'
				>
					<path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
					<path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
				</svg>
				{item.vneseName || item.name}{' '}
			</NavLink>
		</li>
	);
}
function SidebarLinkMobile({ item }) {
	return (
		<li>
			<NavLink
				to={item.link}
				className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
				role='menuitem'
			>
				{item.vneseName || item.name}{' '}
			</NavLink>
		</li>
	);
}

export default function SidebarContent() {
	const [docSidebar, setDocSidebar] = useState([
		{
			id: 1,
			vneseName: 'Bài tập',
			link: '/app/tasks',
			type: 'link',
		},
	]);
	return (
		<div
			className='dark:text-white min-w-[250px] w-[250px] dark:bg-slate-900
  min-h-[100vh] z-3 pt-4 text-left px-2 border-r border-slate-300 dark:border-[#918e8e]'
		>
			<nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
				<div className='px-3 py-3 lg:px-5 lg:pl-3'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center justify-start rtl:justify-end'>
							<button
								data-drawer-target='logo-sidebar'
								data-drawer-toggle='logo-sidebar'
								aria-controls='logo-sidebar'
								type='button'
								className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
							>
								<span className='sr-only'>Open sidebar</span>
								<svg
									className='w-6 h-6'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										clipRule='evenodd'
										fillRule='evenodd'
										d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
									></path>
								</svg>
							</button>
							<a href='/react-basic' className='flex ms-2 md:me-24'>
								<img src={logo} className='h-8 me-3' alt='FlowBite Logo' />
								<span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
									React
								</span>
							</a>
						</div>
						<div className='flex items-center'>
							<div className='flex items-center ms-3'>
								<div>
									<button
										type='button'
										className='flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
										aria-expanded='false'
										data-dropdown-toggle='dropdown-user'
									>
										<span className='sr-only'>Open user menu</span>
										<img
											className='w-8 h-8 rounded-full'
											src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
											alt='user photo'
										/>
									</button>
								</div>
								<div
									className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
									id='dropdown-user'
								>
									<div className='px-4 py-3' role='none'>
										<p className='text-sm text-gray-900 dark:text-white' role='none'>
											Neil Sims
										</p>
										<p className='text-sm font-medium text-gray-900 truncate dark:text-gray-300' role='none'>
											neil.sims@flowbite.com
										</p>
									</div>
									<ul className='py-1' role='none'>
										{docSidebar.map(o => {
											if (o.type === 'link') {
												return <SidebarLinkMobile key={o.id} item={o} />;
											}
											return null;
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>

			<aside
				id='logo-sidebar'
				className='fixed min-w-[250px] w-[250px] top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
				aria-label='Sidebar'
			>
				<div className='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
					<ul className='space-y-2 font-medium'>
						{docSidebar.map(o => {
							if (o.type === 'link') {
								return <SidebarLink key={o.id} item={o} />;
							}
							return null;
						})}
					</ul>
				</div>
			</aside>
		</div>
	);
}
