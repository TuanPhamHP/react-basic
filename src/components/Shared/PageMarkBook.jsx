import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function PageMarkBook() {
	const [pageMarkBook, setPageMarkBook] = useState([]);

	useEffect(() => {
		const listHeading = [...document.querySelectorAll('.page-heading-lv1')];
		setPageMarkBook(
			listHeading.map(o => {
				return {
					name: o.innerText,
					link: o.getAttribute('id'),
				};
			})
		);
	}, []);
	return (
		<div
			className='hidden sticky top-[90px] px-2 h-fit md:block table-of-content w-[300px] min-w-[300px] text-slate-900 dark:text-white
		border-l border-slate-300 dark:border-white'
		>
			Đầu mục
			<div className='flex flex-col gap-2 py-2 px-1'>
				{pageMarkBook.map(item => (
					<a key={item.name} href={`#${item.link}`}>
						{item.name}
					</a>
				))}
			</div>
		</div>
	);
}
