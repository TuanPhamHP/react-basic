import React from 'react';

export default function FakeTerminalUI({ children }) {
	return (
		<div
			className='px-3 py-2 rounded bg-neutral-100 dark:bg-neutral-200 my-3
    text-slate-900
    '
		>
			{children}
		</div>
	);
}
