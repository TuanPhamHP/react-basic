import React from 'react';

export default function PageHeading({ text, addOnClass, markedAs = '', lvl = 1 }) {
	return (
		<h1
			className={`page-heading-lv${lvl} text-slate-900 dark:text-white font-bold text-lg md:text-3xl ${
				addOnClass || ''
			}`}
			markedas={markedAs}
			id={markedAs}
		>
			{text}
		</h1>
	);
}
