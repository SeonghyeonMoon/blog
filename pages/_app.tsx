import { css, ThemeProvider } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Footer, GoogleAnalystics, Header, JenniferFront, PageUpButton } from '@/components/Common';
import ProgressBar from '@/components/Common/ProgressBar';
import GlobalStyles from '@/styles/GlobalStyles';
import { darkTheme, lightTheme } from '@/styles/theme';
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
      <GoogleAnalystics />
      <JenniferFront />
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <PageUpButton />
        <AnimatePresence initial={true} mode='wait'>
          <motion.main
            key={asPath}
            variants={variants}
            animate='in'
            initial='out'
            exit='out'
            css={css`
              margin: 0 auto;
              max-width: 768px;
              @media (max-width: 900px) {
                padding: 0 20px;
              }
            `}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <ProgressBar />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
