import React, { useState, useEffect } from 'react';
import PageHeading from '../../../components/Shared/PageHeading';
import FakeTerminalUI from '../../../components/Shared/FakeTerminalUI';
import TaskUpdateStatusButton from '../../../components/Buttons/TaskUpdateStatusButton';
import api from '../../../fake-server';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';

function MyDisclosure() {
	const [form, setForm] = useState({});

	const updateFormField = event => {
		const target = event.target;
		if (!target) {
			return;
		}
		const key = target.getAttribute('name');
		setForm({
			...form,
			[key]: target.value,
		});
	};

	const submitField = e => {
		e.preventDefault();
		if (form.email !== 'nguoidung@gmail.com') {
			alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin');
			return;
		}
		if (form.password !== '123456') {
			alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin');
			return;
		}
		alert('Đăng nhập thành công');
	};

	return (
		<Disclosure>
			<Disclosure.Button className='mt-5'>
				<p className='text-white py-2 px-3 rounded bg-blue-500'>Ví dụ</p>
			</Disclosure.Button>
			<Disclosure.Panel>
				<FakeTerminalUI>
					<form className='max-w-sm mx-auto py-5' onSubmit={submitField}>
						<div className='mb-5'>
							<label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 '>
								Email
							</label>
							<input
								name='email'
								type='email'
								id='email'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Email của bạn'
								required
								onKeyUp={e => {
									updateFormField(e);
								}}
							/>
						</div>
						<div className='mb-5'>
							<label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 '>
								Password
							</label>
							<input
								name='password'
								type='password'
								id='password'
								placeholder='Mật khẩu'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								required
								onKeyUp={e => {
									updateFormField(e);
								}}
							/>
						</div>

						<button
							type='submit'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Gửi
						</button>
					</form>
				</FakeTerminalUI>
			</Disclosure.Panel>
		</Disclosure>
	);
}

export default function DetailTaskPage() {
	const [task, setTask] = useState(null);
	useEffect(() => {
		const task = api.task.getDetailTask(2);
		setTask(task);
	}, []);

	const finishSuccess = () => {
		alert('Hoàn thành task thành công ^^');
		const task = api.task.getDetailTask(2);
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
					1/ Sử dụng hook <b>useState()</b> để tạo ra một state tên <b>`form`</b> dạng object
				</p>
				<p className='text-slate-900 dark:text-white mt-5'>
					2/ Tại phần view dùng <b>jsx</b> để tạo form gồm 2 input là <b>`Email`</b> và <b>`Password`</b> để cho phép
					người dùng nhập giá trị
				</p>
				<p className='text-slate-900 dark:text-white mt-5'>
					3/ Tạo 1 button <b>`Gửi`</b>. Tại đây tiến hành xử lý:
				</p>
				<ol className='text-slate-900 dark:text-white mt-1 pl-5'>
					<li>a/ Kiểm tra dữ liệu người dùng nhập</li>
					<li>b/ Báo thất bại khi người dùng nhập liệu lỗi (sai/ thiếu)</li>
					<li>c/ Báo thành công nếu người dùng nhập đúng.</li>
					<li>
						<b>
							Điều kiện kiểm tra là:
							<br />
							email = nguoidung@gmail.com;
							<br /> password = 123456
						</b>
					</li>
				</ol>

				<MyDisclosure />
			</div>
		</div>
	);
}
