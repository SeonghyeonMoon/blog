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
          transition: background-color 0.25s linear, color 0.25s linear;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        h1 {
          font-size: 30px;
          font-weight: 600;
        }

        h2 {
          font-size: 24px;
          font-weight: 600;
        }

        h3 {
          font-size: 20px;
          font-weight: 600;
        }

        p {
          font-size: 16px;
          font-weight: 600;
        }

        hr {
          border: 0;
          border-top: 1px solid ${theme.hr};
          transition: border-top-color 0.25s linear;
        }

        table {
          margin-bottom: 20px;
          width: 100%;
          border: ${theme.gray} solid 1px;
          border-radius: 5px;

          th {
            padding: 10px;
            border: ${theme.gray} solid 1px;
            background-color: ${theme.default};
            width: 110px;
            transition: border 0.25s linear, background-color 0.25s linear;
            vertical-align: middle;
          }

          td {
            padding: 5px 10px;
            border: ${theme.gray} solid 1px;
            transition: border 0.25s linear;
            line-height: 1.5;
            vertical-align: middle;

            a {
              text-decoration: underline;
            }

            ul {
              list-style: disc;
              padding-left: 15px;

              ul {
                list-style: circle;
              }
            }
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
