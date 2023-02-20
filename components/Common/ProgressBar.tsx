import { css, useTheme } from '@emotion/react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressBar = () => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 800, damping: 100 });

  return (
    <motion.div
      style={{ scaleX }}
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background-color: ${theme.font};
        z-index: 100;
        transform-origin: 0;
        transition: background-color 0.2s linear;
      `}
    />
  );
};

export default ProgressBar;
