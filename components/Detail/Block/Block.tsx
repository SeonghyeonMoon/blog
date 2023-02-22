import { css, useTheme } from '@emotion/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Bookmark from '@/components/Detail/Block/Bookmark';
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import Heading3 from './Heading3';
import Text from './Text';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

// TODO: type 정의 보충
type BlockProps = {
  block: {
    id: string;
    type: string;
    text: RichTextItemResponse[];
    children?: BlockProps['block'][];
    code?: string;
    url?: string;
    language?: string;
    caption?: string;
    title?: string;
    description?: string;
    favicon?: string;
    image?: string;
  };
};

const Block = ({ block }: BlockProps) => {
  const theme = useTheme();

  switch (block.type) {
    case 'paragraph':
      return (
        <p
          css={css`
            margin-top: 8px;
            margin-bottom: 8px;
          `}
        >
          <Text textList={block.text} />
          {block.children?.map((child) => (
            <Block block={child} key={child.id} />
          ))}
        </p>
      );

    case 'heading_1':
      return <Heading1 id={block.id} text={block.text} />;

    case 'heading_2':
      return <Heading2 id={block.id} text={block.text} />;

    case 'heading_3':
      return <Heading3 id={block.id} text={block.text} />;

    case 'numbered_list':
      return (
        <ol
          css={css`
            padding-left: 15px;
            list-style: decimal;
          `}
        >
          {block.children?.map((child) => (
            <li
              css={css`
                margin-top: 8px;
                margin-bottom: 8px;
              `}
              key={child.id}
            >
              <Text textList={child.text} />
              {child.children?.map((child) => (
                <Block block={child} key={child.id} />
              ))}
            </li>
          ))}
        </ol>
      );

    case 'bulleted_list':
      return (
        <ul
          css={css`
            padding-left: 15px;
            list-style: disc;
          `}
        >
          {block.children?.map((child) => (
            <li
              css={css`
                margin-top: 8px;
                margin-bottom: 8px;
              `}
              key={child.id}
            >
              <Text textList={child.text} />
              {child.children?.map((grandChild) => (
                <Block block={grandChild} key={child.id} />
              ))}
            </li>
          ))}
        </ul>
      );

    case 'quote':
      return (
        <blockquote>
          <Text textList={block.text} />
        </blockquote>
      );

    case 'code':
      if (!block.code) return null;
      return (
        <SyntaxHighlighter language={block.language} style={dracula}>
          {block.code}
        </SyntaxHighlighter>
      );

    case 'image':
      if (!block.url) return null;
      return (
        <div>
          <img src={block.url} alt={block.caption ?? ''} />
          {block.caption ? (
            <figcaption
              css={css`
                color: ${theme.gray};
              `}
            >
              {block.caption}
            </figcaption>
          ) : null}
        </div>
      );

    case 'bookmark':
      return <Bookmark {...block} />;
    default:
      return null;
  }
};

export default Block;
