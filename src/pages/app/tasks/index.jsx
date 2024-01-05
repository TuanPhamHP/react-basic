import React, { useState, useEffect } from 'react';
import TaskBg1 from '../../../assets/images/task_bg_1.png';
import { Link } from 'react-router-dom';
import CardTask01 from '../../../assets/images/card_task_01.png';
import CardTask02 from '../../../assets/images/card_task_02.png';
import CardTask03 from '../../../assets/images/card_task_03.png';
import CardTask04 from '../../../assets/images/card_task_04.png';
import CardTask05 from '../../../assets/images/card_task_05.png';
import api from '../../../fake-server';

function Card({ item }) {
	const arr = [CardTask01, CardTask02, CardTask03, CardTask04, CardTask05];

	const getRandomBg = () => {
		return arr[Math.floor(Math.random() * arr.length)];
	};
	return (
		<div
			className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full relative overflow-hidden
    flex flex-col
    '
		>
			<img className='rounded-t-lg' src={getRandomBg()} alt='' />
			<div className='p-5 flex flex-col grow'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{item.name}</h5>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{item.description}</p>
				<Link
					to={item.link}
					className='inline-flex w-fit mt-auto items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Detail
					<svg
						className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 14 10'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M1 5h12m0 0L9 1m4 4L9 9'
						/>
					</svg>
				</Link>
			</div>

			{item.status_id === 2 ? (
				<span
					class='bg-green-200 text-green-800 text-xs font-medium text-center
          py-0.5 rounded dark:bg-green-900 dark:text-green-300
          absolute bottom-3 right-1 rotate-[-45deg] block px-6 translate-x-1/4 translate-y-1/4'
				>
					Done
				</span>
			) : (
				<></>
			)}
		</div>
	);
}

export default function AppTask() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const listData = api.task.getListTask();
		setTasks(listData);
	}, []);

	return (
		<div className='w-full pt-[56px]'>
			<div className='relative'>
				<img src={TaskBg1} alt='' className='w-full block max-h-[300px] rounded-b-xl' />
				<p
					className='text-white font-bold text-leading-6
        md:text-6xl absolute bottom-10 right-10'
				>
					Bài tập
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-4  gap-4 px-4 py-5'>
				{tasks.map(o => (
					<div key={o.id} className='col col-span-1'>
						<Card item={o}></Card>
					</div>
				))}
			</div>
		</div>
	);
}
