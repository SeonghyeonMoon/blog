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
        height: 5px;
        background-color: ${theme.default};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        transform-origin: 0;
      `}
    />
  );
};

export default ProgressBar;
