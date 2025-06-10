// App.js
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import './style.css';

const ThemeToggleButton = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Switch to {isDark ? 'Light' : 'Dark'} Mode
    </button>
  );
};

const HomePage = () => (
  <div>
    <h1>Welcome to the Theme Toggle App</h1>
    <ThemeToggleButton />
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}
