// ThemeContext.js
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
	const [isDarkTheme, setDarkTheme] = useState(true);
	const [docSidebar, setDocSidebar] = useState([]);

	const toggleTheme = () => {
		localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
		setDarkTheme(prevTheme => !prevTheme);
	};
	useState(() => {
		const currentTheme = localStorage.getItem('theme');
		if (currentTheme === 'dark') {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, []);
	const themeClass = isDarkTheme ? 'dark' : 'light';

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme, themeClass, docSidebar, setDocSidebar }}>
			{children}
		</ThemeContext.Provider>
	);
};
