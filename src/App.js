import './App.css';
import DefaultLayout from './components/Layouts/DefaultLayout';
import { useTheme } from './context/Theme';
import AppRouteController from './routes';
import ToggleThemeButton from './components/ToggleThemeButton';
import SidebarContent from './components/Layouts/SidebarContent';
import { useLocation } from 'react-router-dom';
import Example from './components/example';

function App() {
	const { themeClass } = useTheme();
	const location = useLocation();
	return (
		<div className={`App ${themeClass}`}>
			<DefaultLayout>
				<div id='main-content' className='min-h-[100vh] w-full dark:bg-slate-800 flex'>
					{/* {['/', '/react-basic'].includes(location.pathname) ? null : <SidebarContent />} */}
					<div className=' w-full'>
						<AppRouteController />
					</div>
				</div>
				<ToggleThemeButton />
			</DefaultLayout>
		</div>
	);
}

export default App;
