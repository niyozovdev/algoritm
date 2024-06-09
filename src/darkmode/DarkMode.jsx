import { useState, useEffect } from 'react';
import iconLight from './icon_mode/moon.svg';
import iconDark from './icon_mode/sun.svg';
import './DarkMode.css';



function DarkMode() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const body = document.querySelector('body');
    body.setAttribute('theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  const iconSrc = theme === 'light' ? iconLight : iconDark;

  return (
    <div className="darkMode_box" onClick={toggleTheme}>
      <img src={iconSrc} alt="Icon" id="iconImg" />
    </div>
  );
}

export default DarkMode;
