import React, { useEffect } from 'react';
import PageHeading from '../../components/Shared/PageHeading';
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

	return (
		<div className='w-full md:px-5'>
			<PageHeading text={'Nothing here. Gonna update soon....'} addOnClass={'text-left'} />
		</div>
	);
}
