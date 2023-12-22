import React from 'react';

export default function NotFoundPage() {
	return (
		<div className='w-full h-full flex items-center flex-col py-10'>
			<h1 className='text-2xl font-bold text-center dark:text-white'>404</h1>
			<p className='text-center py-5 dark:text-white'>Chúng tôi không tìm thấy đường dẫn bạn đang tìm kiếm.</p>
		</div>
	);
}
