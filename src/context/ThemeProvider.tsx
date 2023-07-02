import React, { createContext, useState, useEffect, useContext, FC } from 'react';

// Define the type for your context value
type ThemeContextValue = {
  theme: string;
  toggleTheme: (theme: string) => void;
};


// Create the context provider component
type ThemeProviderProps = {
    children: React.ReactNode;
  };

// Create the context
export const ThemeContext = createContext<ThemeContextValue>({
  theme: '',
  toggleTheme: () => '',
});

// Create the context provider component
const ThemeProvider: FC<ThemeProviderProps> = ({ children } ) => {
  // Function to get user's system preference
  const getSystemPreference = (): string => {
    if (window.matchMedia) {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDarkMode ? 'dark' : 'light';
    }
    // Default to 'light' if browser doesn't support matchMedia
    return 'light';
  };

  // Retrieve the theme from local storage or set the default theme
  const initialTheme = localStorage.getItem('theme') || getSystemPreference();

  // Set up state to store the current theme
  const [theme, setTheme] = useState(initialTheme);

  // Toggle theme
  const toggleTheme = (theme: string): void => {
    if (theme === 'system') {
      setTheme(getSystemPreference());
      return;
    }
    setTheme(theme);
  };

  // Update the theme in local storage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Create the context value
  const contextValue: ThemeContextValue = {
    theme,
    toggleTheme,
  };

  // Render the provider with the context value and children
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): [string, (theme: string) => void] => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return [theme, toggleTheme];
};

export default ThemeProvider;