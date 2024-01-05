import React from 'react';
import api from '../../fake-server';

function TaskFinishButton({ task, onSuccess, onFail }) {
	const onAction = () => {
		const res = api.task.finishTask(task.id);
		if (!res.success) {
			onFail();
		} else {
			onSuccess();
		}
	};

	return task?.status_id === 1 ? (
		<p className='text-white py-1 px-2 rounded bg-blue-500 cursor-pointer' onClick={onAction}>
			Hoàn thành
		</p>
	) : (
		<p className='bg-green-400 text-white py-1 px-2 rounded font-bold'>Đã hoàn thành</p>
	);
}

export default function TaskUpdateStatusButton({ detailData, onSuccess = () => {}, onFail = () => {} }) {
	return (
		<div className='flex gap-2 mt-2'>
			<TaskFinishButton task={detailData} onSuccess={onSuccess} onFail={onFail} />
		</div>
	);
}
