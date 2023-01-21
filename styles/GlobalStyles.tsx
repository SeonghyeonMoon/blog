import { css, Global, useTheme } from '@emotion/react';
import reset from './reset';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        ${reset}

        body {
          background: ${theme.background};
          color: ${theme.font};
          transition: all 0.25s linear;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
};

export default GlobalStyles;
