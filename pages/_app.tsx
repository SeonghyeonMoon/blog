import { ThemeProvider } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import DarkModeToggleButton from '@/components/DarkModeToggleButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import GlobalStyles from '@/styles/GlobalStyles';
import { darkTheme, theme } from '@/styles/theme';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : theme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <DarkModeToggleButton onClick={toggleTheme}>
          <Image src='/moon.png' alt='moon' width='30' height='30' />
        </DarkModeToggleButton>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
