import React from 'react';

export default function PageHeading({ text, addOnClass }) {
	return <h1 className={`text-slate-900 dark:text-white font-bold text-lg md:text-3xl ${addOnClass || ''}`}>{text}</h1>;
}
