let isUptodate = false;
let listTask = [
	{
		id: 1,
		name: 'Bài 1 - Tạo component',
		description: 'Tạo một RFC đơn giản, hiển thị dữ liệu từ state. Thay đổi dữ liệu và update UI.',
		link: '/app/tasks/bai-1',
		status_id: 1, // 1: new, 2: finished
	},
	{
		id: 2,
		name: 'Bài 2 - Form input',
		description: 'Tạo một Form Component, cho phép người dùng điền dữ liệu vào các ô input, kiểm tra và xử lý dữ liệu.',
		link: '/app/tasks/bai-2',
		status_id: 1,
	},
];

const saveLocal = () => {
	localStorage.setItem('tasks', JSON.stringify(listTask));
};
const syncService = () => {
	const localTask = JSON.parse(localStorage.getItem('tasks')) || [];

	listTask = listTask.map(o => {
		const storage = localTask.find(k => k.id === o.id);
		return storage || o;
	});
	isUptodate = true;
};
const syncTask = task => {
	const matchIdx = listTask.findIndex(o => o.id === task.id);
	if (matchIdx !== -1) {
		listTask.splice(matchIdx, 1, task);
	}
	saveLocal();
};

const getListTask = () => {
	// const localTask = JSON.parse(localStorage.getItem('tasks'));

	// listTask = localTask || listTask;
	if (!isUptodate) {
		syncService();
	}
	return listTask;
};
const getDetailTask = id => {
	const listTask = getListTask();
	const rslt = listTask.find(o => o.id === id);
	return rslt || null;
};
const finishTask = id => {
	const task = getDetailTask(id);
	if (!id) {
		return {
			success: false,
			status_code: 404,
			message: 'Not found',
			data: null,
		};
	}
	task.status_id = 2;
	syncTask(task);
	return {
		success: true,
		status_code: 200,
		message: 'success',
		data: {
			task,
		},
	};
};

const task = {
	getListTask,
	getDetailTask,
	finishTask,
};
export default task;
