import { css, useTheme } from '@emotion/react';
import { Fragment } from 'react';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

type TextProps = {
  textList: RichTextItemResponse[];
};

const Text = ({ textList }: TextProps) => {
  const theme = useTheme();
  return (
    <>
      {textList.map((value, idx) => {
        const {
          href,
          plain_text,
          annotations: { bold, code, italic, strikethrough, underline },
        } = value;
        const isAnnotated = bold || code || italic || strikethrough || underline;
        if (!isAnnotated) {
          return (
            <Fragment key={idx}>
              {href ? (
                <a
                  href={href}
                  css={css`
                    text-decoration: underline;
                  `}
                >
                  {plain_text}
                </a>
              ) : (
                plain_text
              )}
            </Fragment>
          );
        }

        const codeStyle = css`
          background-color: ${theme.code};
          color: #eb5757;
          padding: 2px 4px;
          border-radius: 4px;
          transition: all 0.25s linear;
        `;

        return (
          <span
            key={idx}
            css={[
              css`
                ${bold ? 'font-weight: bold;' : ''}
                ${italic ? 'font-style: italic;' : ''}
                ${strikethrough ? 'text-decoration: line-through;' : ''}
                ${underline ? 'text-decoration: underline;' : ''}
              `,
              code && codeStyle,
            ]}
          >
            {href ? (
              <a
                href={href}
                css={css`
                  text-decoration: underline;
                `}
              >
                {plain_text}
              </a>
            ) : (
              plain_text
            )}
          </span>
        );
      })}
    </>
  );
};

export default Text;
