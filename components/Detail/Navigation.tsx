import { css, useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import Text from '@/components/Detail/Text';
import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

type NavigationProps = {
  blocks: BlockObjectResponse[];
};

const Navigation = ({ blocks }: NavigationProps) => {
  const [viewId, setViewId] = useState('');

  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setViewId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0%' },
    );

    document.querySelectorAll('main > ul > h2, main > ul > h3').forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <nav
      css={css`
        position: fixed;
        width: 240px;
        left: calc(50vw + 450px);
        top: 200px;
        color: ${theme.hr};
        padding: 10px 15px;
        border-left: 1px solid ${theme.hr};

        @media (max-width: 1200px) {
          display: none;
        }
      `}
    >
      {blocks.map((block, index) => {
        // @ts-ignore
        if (block.type === 'heading_2') {
          const id = block[block.type].rich_text.map(({ plain_text }) => plain_text).join('');
          return (
            <div
              key={index}
              css={css`
                transition: color 0.25s linear, transform 0.25s linear;
                &:hover {
                  color: ${theme.font};
                  cursor: pointer;
                  transform: scale(1.025);
                }
                ${viewId === id ? `color: ${theme.font}` : ''}
              `}
            >
              <a href={`#${id}`}>
                <Text textList={block.heading_2.rich_text} />
              </a>
            </div>
          );
        }
        if (block.type === 'heading_3') {
          const id = block[block.type].rich_text.map(({ plain_text }) => plain_text).join('');
          return (
            <div
              key={index}
              css={css`
                padding-left: 10px;
                transition: color 0.25s linear, transform 0.25s linear;
                &:hover {
                  color: ${theme.font};
                  cursor: pointer;
                  transform: scale(1.025);
                }
                ${viewId === id ? `color: ${theme.font}` : ''}
              `}
            >
              <a href={`#${block[block.type].rich_text.map(({ plain_text }) => plain_text).join('')}`}>
                <Text textList={block.heading_3.rich_text} />
              </a>
            </div>
          );
        }
      })}
    </nav>
  );
};

export default Navigation;
