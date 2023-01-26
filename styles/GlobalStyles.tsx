import { css, Global, useTheme } from '@emotion/react';
import reset from './reset';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        ${reset}

        * {
          box-sizing: border-box;
        }

        body {
          background: ${theme.background};
          color: ${theme.font};
          transition: all 0.25s linear;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        h1 {
          margin-top: 32px;
          padding: 3px 2px;
          font-size: 30px;
          font-weight: 600;
        }

        h2 {
          margin-top: 24px;
          padding: 3px 2px;
          font-size: 24px;
          font-weight: 600;
        }

        h3 {
          margin-top: 16px;
          padding: 3px 2px;
          font-size: 20px;
          font-weight: 600;
        }

        p {
          padding: 3px 2px;
          color: ${theme.font};
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          transition: all 0.25s linear;
        }

        hr {
          border: 0;
          border-top: 1px solid ${theme.hr};
          transition: all 0.25s linear;
        }
      `}
    />
  );
};

export default GlobalStyles;
