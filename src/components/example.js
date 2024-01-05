import React, { useState } from 'react';

export default function App() {
	const [counter, setcounter] = useState(1);

	const add = () => {
		setcounter(counter + 1);
	};

	return (
		<div>
			<p> Số đếm hiện tại: {counter} </p>
			<button onClick={add}>Tăng số đếm</button>
		</div>
	);
}
