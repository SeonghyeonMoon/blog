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
          annotations: { bold, code, italic, strikethrough, underline },
          plain_text: text,
        } = value;
        const isAnnotated = bold || code || italic || strikethrough || underline;
        if (!isAnnotated) {
          return <Fragment key={idx}>{text}</Fragment>;
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
            {text}
          </span>
        );
      })}
    </>
  );
};

export default Text;

// <TextSpan key={idx} styles={{ bold, code, color, italic, strikethrough, underline }}>
//   {text.link ? <LinkText href={text.url}>{text}</LinkText> : text}
// </TextSpan>
//
//
// export const LinkText = styled.a`
//   font-size: 16px;
//   text-decoration: underline;
//   text-decoration-color: ${(p) => p.theme.gray};
//   color: ${(p) => p.theme.gray};
//   opacity: 0.8;
// `;
