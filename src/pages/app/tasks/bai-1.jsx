import React, { useState, useEffect } from 'react';
import PageHeading from '../../../components/Shared/PageHeading';
import FakeTerminalUI from '../../../components/Shared/FakeTerminalUI';
import TaskUpdateStatusButton from '../../../components/Buttons/TaskUpdateStatusButton';
import api from '../../../fake-server';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';

function MyDisclosure() {
	const [counter, setCounter] = useState(1);
	const increase = () => {
		setCounter(counter + 1);
	};
	const decrease = () => {
		setCounter(counter - 1);
	};
	return (
		<Disclosure>
			<Disclosure.Button className='mt-5'>
				<p className='text-white py-2 px-3 rounded bg-blue-500'>Ví dụ</p>
			</Disclosure.Button>
			<Disclosure.Panel>
				<FakeTerminalUI>
					<p className='text-slate-900'>
						Xin chào! tôi là <b>`counter`</b>. Giá trị của tôi là: <span className='text-xl'>{counter}</span>
					</p>
					<div className='flex gap-2 mt-2'>
						<p className='text-white py-1 px-2 rounded bg-blue-500 cursor-pointer' onClick={increase}>
							Tăng
						</p>
						<p className='text-white py-1 px-2 rounded bg-red-500 cursor-pointer' onClick={decrease}>
							Giảm
						</p>
					</div>
				</FakeTerminalUI>
			</Disclosure.Panel>
		</Disclosure>
	);
}

export default function DetailTaskPage() {
	const [task, setTask] = useState(null);
	useEffect(() => {
		const task = api.task.getDetailTask(1);
		setTask(task);
	}, []);

	const finishSuccess = () => {
		alert('Hoàn thành task thành công ^^');
		const task = api.task.getDetailTask(1);
		setTask(task);
	};

	return (
		<div className='w-full pt-[56px]'>
			<div className='md:px-5 py-5'>
				<div className='flex items-center gap-3'>
					<Link
						to='/app/tasks'
						className='hover:bg-neutral-200/50 flex w-8 h-8 px-1 py-1 rounded-full items-center justify-center'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='white'
							className='w-6 h-6 hidden dark:block'
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='black'
							className='w-6 h-6 block dark:hidden'
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
						</svg>
					</Link>
					<PageHeading text={task?.name} addOnClass={'text-left'} markedAs={'env'} />
					<TaskUpdateStatusButton detailData={task} onSuccess={finishSuccess} />
				</div>
				<div className='py-2 mb-5'>
					<div className='h-[1px] dark:bg-white bg-slate-900'></div>
				</div>
				<PageHeading text={'Yêu cầu'} addOnClass={'text-left'} markedAs={'env'} />
				<p className='text-slate-900 dark:text-white mt-5'>
					Tạo một <b>React Functional Component - RFC</b> trong project của bạn.
				</p>
				<p className='text-slate-900 dark:text-white mt-5'>
					1/ Sử dụng hook <b>useState()</b> để tạo ra một state tên <b>`counter`</b>
				</p>
				<p className='text-slate-900 dark:text-white mt-5'>
					2/ Tại phần view dùng <b>jsx</b> để hiển thị state <b>`counter`</b> ra ngoài view
				</p>
				<p className='text-slate-900 dark:text-white mt-5'>
					3/ Tạo 2 button và hàm để tăng, giảm giá trị của <b>`counter`</b>. Gán hàm vừa tạo vào sự kiện click của
					button.
				</p>
				<p className='text-slate-900 dark:text-white mt-5'>
					=&gt; Khi click các button thì giá trị của <b>`counter`</b> sẽ thay đổi tương ứng
				</p>
				<MyDisclosure />
			</div>
		</div>
	);
}
