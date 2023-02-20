import { css, useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { SlArrowUp } from 'react-icons/sl';

const PageUpButton = () => {
  const theme = useTheme();
  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    setHeight(window.scrollY);
  };

  const movePageTop = () => {
    if (height < 300) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={movePageTop}
      css={css`
        position: fixed;
        left: 50vw;
        bottom: 30px;
        z-index: 10;
        border: none;
        background: none;
      `}
    >
      <SlArrowUp
        css={css`
          width: 25px;
          height: 25px;
          color: ${theme.font};
          opacity: ${height > 300 ? 0.8 : 0};
          transition: all 0.25s linear;

          &:hover {
            cursor: ${height > 300 ? 'pointer' : 'default'};
            transform: scale(1.1);
          }
        `}
      />
    </button>
  );
};

export default PageUpButton;
