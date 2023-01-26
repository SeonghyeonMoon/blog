import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Li from '@/components/Block/Li';
import P from '@/components/Block/P';
import Ul from '@/components/Block/Ul';
import H1 from './H1';
import H2 from './H2';
import H3 from './H3';
import type { BlockType } from '@/apis/notion';

type BlockProps = {
  block: BlockType | undefined;
};

const Block = ({ block }: BlockProps) => {
  if (!block) return null;
  const { type, text } = block;
  switch (type) {
    case 'paragraph':
      return <P>{text}</P>;
    case 'heading_1':
      return <H1>{text}</H1>;
    case 'heading_2':
      return <H2>{text}</H2>;
    case 'heading_3':
      return <H3>{text}</H3>;
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
    default:
      return null;
  }
};

export default Block;
