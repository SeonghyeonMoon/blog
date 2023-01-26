import { css, ThemeProvider } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DarkModeToggleButton from '@/components/DarkModeToggleButton';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import GlobalStyles from '@/styles/GlobalStyles';
import { darkTheme, theme } from '@/styles/theme';
import type { AppProps } from 'next/app';

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.5,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  const { asPath } = useRouter();
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
        <AnimatePresence initial={true} mode='wait'>
          <motion.main
            key={asPath}
            variants={variants}
            animate='in'
            initial='out'
            exit='out'
            css={css`
              margin: 0 auto;
              max-width: 800px;
              overflow: hidden;
            `}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
