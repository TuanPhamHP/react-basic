import React, { useEffect } from 'react';
import { useTheme } from '../../context/Theme';

export default function ReactDocsPage() {
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

	return <div>ReactDocsPage</div>;
}
