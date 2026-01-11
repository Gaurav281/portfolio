import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaPalette } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="relative group">
      <button className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow">
        <FaPalette className="text-xl text-blue-600 dark:text-blue-400" />
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          <div className="px-4 py-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
            Choose Theme
          </div>
          {Object.entries(themes).map(([key, themeObj]) => (
            <button
              key={key}
              onClick={() => setTheme(key)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                theme === key ? 'bg-blue-50 dark:bg-blue-900/20' : ''
              }`}
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{ background: themeObj.gradient }}
              />
              <span className="text-slate-700 dark:text-slate-300">
                {themeObj.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;