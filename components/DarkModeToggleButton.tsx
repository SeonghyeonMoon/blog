import Image from 'next/image';
import { useState } from 'react';

const DarkModeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <button
      className='fixed right-10 bottom-10 rounded-full p-1 transition dark:bg-default-dark'
      onClick={toggleDarkMode}
    >
      <Image src='/moon.png' alt='moon' width='30' height='30' />
    </button>
  );
};

export default DarkModeToggleButton;
