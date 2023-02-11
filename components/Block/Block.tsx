import { css, useTheme } from '@emotion/react';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Text from '@/components/Block/Text';
import Bookmark from './Bookmark';
import type { BlockObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

type BlockProps = {
  block: BlockObjectResponse;
};

const Block = ({ block }: BlockProps) => {
  const theme = useTheme();
  const { type } = block;
  switch (type) {
    case 'paragraph':
      return (
        <p
          css={css`
            line-height: 1.5;
            margin: 8px 0;
          `}
        >
          <Text textList={block[type].rich_text} />
        </p>
      );

    case 'heading_1':
      return (
        <h1
          css={css`
            margin-top: 32px;
            margin-bottom: 16px;
          `}
        >
          <Text textList={block[type].rich_text} />
        </h1>
      );

    case 'heading_2':
      return (
        <>
          <h2
            css={css`
              margin-top: 24px;
            `}
          >
            <Text textList={block[type].rich_text} />
          </h2>
          <hr />
        </>
      );

    case 'heading_3':
      return (
        <h3
          css={css`
            margin-top: 16px;
            margin-bottom: 16px;
          `}
        >
          <Text textList={block[type].rich_text} />
        </h3>
      );

    case 'bulleted_list_item':
      return (
        <li
          css={css`
            margin: 8px 0;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.5;
            transition: all 0.25s linear;
          `}
        >
          <Text textList={block[type].rich_text} />
          {block.has_children ? (
            <ul
              css={css`
                list-style: disc;

                ul {
                  list-style: circle;
                }
              `}
            >
              {/*@ts-ignore*/}
              {block.children.map((child: BlockObjectResponse, index: number) => (
                <Block block={child} key={index} />
              ))}
            </ul>
          ) : null}
        </li>
      );

    case 'numbered_list_item':
      return (
        <li
          css={css`
            margin: 8px 0;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.5;
            transition: all 0.25s linear;
          `}
        >
          <Text textList={block[type].rich_text} />
          {block.has_children ? (
            <ol>
              {/*@ts-ignore*/}
              {block.children.map((child: BlockObjectResponse, index: number) => (
                <Block block={child} key={index} />
              ))}
            </ol>
          ) : null}
        </li>
      );

    case 'code':
      return (
        <SyntaxHighlighter language='javascript' style={dracula}>
          {block[type].rich_text.reduce((acc: string, cur: RichTextItemResponse) => acc + cur.plain_text, '')}
        </SyntaxHighlighter>
      );

    case 'quote':
      return (
        <blockquote
          css={css`
            color: ${theme.font};
            line-height: 2;
            border-left: 5px solid ${theme.font};
            padding-left: 15px;
            transition: all 0.25s linear;
          `}
        >
          <Text textList={block[type].rich_text} />
        </blockquote>
      );

    case 'bookmark':
      // @ts-ignore
      return <Bookmark {...block[type]} />;

    case 'image':
      return (
        <div>
          <Image
            // @ts-ignore
            src={block[type]?.file.url}
            alt={block[type].caption ? block[type].caption[0].plain_text : ''}
            fill
            css={css`
              object-fit: scale-down;
              position: relative !important;
            `}
          />
          {block[type].caption ? (
            <figcaption
              css={css`
                text-align: center;
                color: ${theme.gray};
              `}
            >
              {block[type].caption[0].plain_text}
            </figcaption>
          ) : null}
        </div>
      );

    default:
      return null;
  }
};

export default Block;
