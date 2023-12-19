import './App.css';
import Header from './components/Layouts/Header';
import { useTheme } from './context/Theme';
import AppRouteController from './routes';
import ToggleThemeButton from './components/ToggleThemeButton';

function App() {
	const { themeClass } = useTheme();
	return (
		<div className={`App ${themeClass}`}>
			<Header />
			<div id='main-content' className='min-h-[100vh] dark:bg-slate-800'>
				<AppRouteController />
			</div>
			<ToggleThemeButton />
		</div>
	);
}

export default App;
