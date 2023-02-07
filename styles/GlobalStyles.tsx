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

        blockquote {
          color: ${theme.font};
          line-height: 2;
          border-left: 5px solid ${theme.font};
          padding-left: 15px;
          transition: all 0.25s linear;
        }

        table {
          width: 100%;
          border: ${theme.gray} solid 1px;
          border-radius: 5px;

          th {
            padding: 10px;
            border: ${theme.gray} solid 1px;
            background-color: ${theme.default};
            width: 110px;
            transition: all 0.25s linear;
            vertical-align: middle;
          }
          td {
            padding: 5px 10px;
            border: ${theme.gray} solid 1px;
            transition: all 0.25s linear;
            line-height: 1.5;
            vertical-align: bottom;

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
