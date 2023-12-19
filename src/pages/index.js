import React, { useState } from 'react';

function TechBlock({ name, link }) {
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer'
			className='block px-2 py-1 rounded bg-neutral-200  w-fit text-slate-900 text-sm
hover:bg-slate-600 hover:text-white transition'
		>
			{name}
		</a>
	);
}
export default function HomePage() {
	const [techBlock, settechBlock] = useState([
		{
			name: 'Create React App',
			link: 'https://create-react-app.dev/docs/getting-started',
		},
		{
			name: 'Tailwind CSS',
			link: 'https://tailwindcss.com/docs/installation',
		},
		{
			name: 'React Router',
			link: 'https://reactrouter.com/en/main/start/overview',
		},
	]);
	return (
		<div className='dark:text-white py-5 max-w-7xl mx-auto'>
			<div className='min-h-[250px] flex items-center justify-center w-full'>
				<h1 className='text-center font-bold md:text-2xl text-slate-900 dark:text-white leading-10'>
					Hello anh em, page này làm ra để ghi lại vài thứ hay ho về ReactJS cho newbie.
					<br />
					Nội dung chính của trang đều về phần basic.
					<br />
					<span className='font-normal'>( •̀ ω •́ )✧</span>
				</h1>
			</div>
			<div className='flex items-center gap-2'>
				<p className='font-bold text-xl'>Stack: </p>
				{techBlock.map(o => (
					<TechBlock name={o.name} link={o.link} />
				))}
			</div>
		</div>
	);
}
