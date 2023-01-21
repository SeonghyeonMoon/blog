import { ThemeProvider } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import DarkModeToggleButton from '@/components/DarkModeToggleButton';
import GlobalStyles from '@/styles/GlobalStyles';
import { darkTheme, theme } from '@/styles/theme';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : theme}>
        <GlobalStyles />
        <DarkModeToggleButton onClick={toggleTheme}>
          <Image src='/moon.png' alt='moon' width='30' height='30' />
        </DarkModeToggleButton>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
