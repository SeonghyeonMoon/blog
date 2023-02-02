import { css } from '@emotion/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Li from '@/components/Block/Li';
import Text from '@/components/Block/Text';
import Ul from '@/components/Block/Ul';
import Bookmark from './Bookmark';
import type { BlockObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

type BlockProps = {
  block: BlockObjectResponse;
};

const Block = ({ block }: BlockProps) => {
  const { type } = block;
  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text textList={block[type].rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <Text textList={block[type].rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <Text textList={block[type].rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <Text textList={block[type].rich_text} />
        </h3>
      );
    case 'bulleted_list_item':
      return (
        <Li>
          <Text textList={block[type].rich_text} />
          {block.has_children ? (
            <Ul>
              {/*@ts-ignore*/}
              {block.children.map((child: BlockObjectResponse, index: number) => (
                <Block block={child} key={index} />
              ))}
            </Ul>
          ) : null}
        </Li>
      );
    case 'numbered_list_item':
      return (
        <Li>
          <Text textList={block[type].rich_text} />
          {block.has_children ? (
            <ol>
              {/*@ts-ignore*/}
              {block.children.map((child: BlockObjectResponse, index: number) => (
                <Block block={child} key={index} />
              ))}
            </ol>
          ) : null}
        </Li>
      );
    case 'code':
      return (
        <SyntaxHighlighter language='javascript' style={dracula}>
          {block[type].rich_text.reduce((acc: string, cur: RichTextItemResponse) => acc + cur.plain_text, '')}
        </SyntaxHighlighter>
      );
    case 'quote':
      return (
        <blockquote>
          <Text textList={block[type].rich_text} />
        </blockquote>
      );
    case 'bookmark':
      // @ts-ignore
      return <Bookmark {...block[type]} />;
    case 'image':
      return (
        <img
          // @ts-ignore
          src={block[type]?.file.url}
          alt={block[type].caption ? block[type].caption[0].plain_text : ''}
          css={css`
            width: 100%;
          `}
        />
      );
    default:
      return null;
  }
};

export default Block;
