// ThemeContext.js
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
	const [isDarkTheme, setDarkTheme] = useState(false);

	const toggleTheme = () => {
		setDarkTheme(prevTheme => !prevTheme);
	};

	const themeClass = isDarkTheme ? 'dark' : 'light';

	return <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, themeClass }}>{children}</ThemeContext.Provider>;
};
