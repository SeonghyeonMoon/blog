import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Bookmark from '@/components/Block/Bookmark';
import Li from '@/components/Block/Li';
import Ul from '@/components/Block/Ul';
import Bookmark from './Bookmark';
import type { BlockObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

type BlockProps = {
  block: BlockType | undefined;
};

const Block = ({ block }: BlockProps) => {
  if (!block) return null;
  const { type, text } = block;
  switch (type) {
    case 'paragraph':
      return <p>{text}</p>;
    case 'heading_1':
      return <h1>{text}</h1>;
    case 'heading_2':
      return <h2>{text}</h2>;
    case 'heading_3':
      return <h3>{text}</h3>;
    case 'bulleted_list_item':
      return (
        <Li>
          {text}
          {block.children ? (
            <Ul>
              {block.children.map((child, index) => (
                <Block block={child} key={index} />
              ))}
            </Ul>
          ) : null}
        </Li>
      );
    case 'numbered_list_item':
      return (
        <Li>
          {text}
          {block.children ? (
            <ol>
              {block.children.map((child, index) => (
                <Block block={child} key={index} />
              ))}
            </ol>
          ) : null}
        </Li>
      );
    case 'code':
      return (
        <SyntaxHighlighter language='javascript' style={dracula}>
          {text}
        </SyntaxHighlighter>
      );
    case 'quote':
      return <blockquote>{text}</blockquote>;
    case 'bookmark':
      return (
        <Bookmark
          text={block.text}
          title={block.title as string}
          description={block.description as string}
          favicon={block.favicon as string}
          image={block.image as string}
        />
      );

    default:
      return null;
  }
};

export default Block;
