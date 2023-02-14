import { css, ThemeProvider, useTheme } from '@emotion/react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DarkModeToggleButton, Footer, GoogleAnalystics, Header, JenniferFront } from '@/components/Common';
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
  const theme = useTheme();
  const { asPath } = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 800, damping: 100 });
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
              max-width: 880px;
              overflow: hidden;
              @media (max-width: 900px) {
                padding: 0 20px;
              }
            `}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <motion.div
          style={{ scaleX }}
          css={css`
            height: 5px;
            background-color: ${theme.font};
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            transform-origin: 0;
          `}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
