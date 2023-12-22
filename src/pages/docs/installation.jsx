import React, { useEffect } from 'react';
import PageHeading from '../../components/Shared/PageHeading';
import FakeTerminalUI from '../../components/Shared/FakeTerminalUI';
import { useTheme } from '../../context/Theme';

export default function InstallationPage() {
	const { setDocSidebar } = useTheme();

	const initSidebar = () => {
		setDocSidebar([
			{
				name: 'Installation',
				vneseName: 'Cài đặt',
				type: 'link',
				link: '/docs/installation',
			},
		]);
	};

	useEffect(() => {
		initSidebar();
	}, []);
	return (
		<div className='flex'>
			<div className='w-full md:px-5'>
				<PageHeading text={'Environment'} addOnClass={'text-left'} />
				<p className='text-slate-900 dark:text-white mt-5'>Hướng dẫn tạo ứng dụng React</p>
				<p className='text-slate-900 dark:text-white mt-5 leading-8'>
					Trước khi bắt đầu cài đặt thì bạn cần đảm bảo máy tính của bạn đã có{' '}
					<a
						href='https://nodejs.org/en/'
						target='_blank'
						rel='noreferrer'
						className='inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500'
					>
						NodeJS
					</a>{' '}
					để lập trình ở local. <br /> Để kiểm tra máy tính của bạn đã có sẵn{' '}
					<a
						href='https://nodejs.org/en/'
						target='_blank'
						rel='noreferrer'
						className='inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500'
					>
						NodeJS
					</a>{' '}
					hay chưa bạn có thể mở Terminal và gõ:
				</p>
				<FakeTerminalUI>
					<p>node --version</p>
				</FakeTerminalUI>
				<p className='text-slate-900 dark:text-white mt-5 leading-8'>
					Nếu máy bạn đã cài đặt NodeJS thì CLI sẽ trả về kết quả là version hiện tại của NodeJS. Ví dụ:
				</p>
				<FakeTerminalUI>
					<p>v18.14.2</p>
				</FakeTerminalUI>
				<p className='text-slate-900 dark:text-white mt-5 leading-8'>
					Sau khi cài đặt Node bạn cần thêm 1 <i>package manager</i> để quản lý các package tại local. <br />
					Chúng ta có thể dùng 2 loại <i>package manager</i> phổ biến là
					<a
						href='https://docs.npmjs.com/'
						target='_blank'
						rel='noreferrer'
						className='inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500'
					>
						NPM
					</a>
					hoặc
					<a
						href='https://v3.yarnpkg.com/getting-started/install'
						target='_blank'
						rel='noreferrer'
						className='inline-block px-1 rounded text-slate-900 dark:text-white underline decoration-2 hover:text-cyan-500'
					>
						YARN
					</a>
				</p>
				<p className='text-slate-900 dark:text-white mt-5 leading-8 font-bold py-2 italic'>
					Note: Bạn cần phải cài đặt đầy đủ Node và Package Manager tại local để có thể tiếp tục.
				</p>
				<div className='py-3'></div>
				<PageHeading text={'1. Create-React-App'} addOnClass={'text-left'} />
				<p className='text-slate-900 dark:text-white mt-5 leading-8'>
					Create-React-App được dùng để khởi tạo nhanh một React SPA. Recommend khi bạn muốn tạo nhanh một SPA, phù hợp
					khi bạn có một dự án nhỏ hoặc sử dụng để học thêm về core của React
				</p>
				<p className='text-slate-900 dark:text-white mt-5 leading-8'>
					<b>Note:</b> Required Node &gt;= 14 on local
				</p>
				<p className='text-slate-900 dark:text-white mt-5 leading-8'>
					<b>Bạn có thể chọn 1 trong các cách cài sau:</b>
				</p>
				<p className='text-slate-900 dark:text-white mt-5 text-lg leading-8'>
					<b>NPX:</b>
				</p>
				<FakeTerminalUI>
					<p>npx create-react-app my-app</p>
				</FakeTerminalUI>
				<span className='text-slate-900 dark:text-white'>
					<b>Note: </b>
					{`npx chỉ dùng được với phiên bản npm 5.2 trở lên`}
				</span>
				<p className='text-slate-900 dark:text-white mt-5 text-lg leading-8'>
					<b>NPM:</b>
				</p>
				<FakeTerminalUI>
					<p>npm init react-app my-app</p>
				</FakeTerminalUI>
				<span className='text-slate-900 dark:text-white'>
					<b>Note: </b>
					{`npm init <initializer> chỉ dùng được với phiên bản npm 6 trở lên`}
				</span>
				<p className='text-slate-900 dark:text-white mt-5 text-lg leading-8'>
					<b>YARN:</b>
				</p>
				<FakeTerminalUI>
					<p>yarn create react-app my-app</p>
				</FakeTerminalUI>

				<span className='text-slate-900 dark:text-white'>
					<b>Note: </b>
					{`yarn create chỉ dùng được với phiên bản Yarn 0.25 trở lên`}
				</span>
			</div>
			<div className='hidden md:block table-of-content w-[300px] min-w-[300px] text-slate-900 dark:text-white'>
				Table of content
			</div>
		</div>
	);
}
