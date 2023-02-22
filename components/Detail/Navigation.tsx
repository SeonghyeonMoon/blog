import { css, useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export type NavigationData = {
  id: string;
  type: 'heading_2';
  text: RichTextItemResponse[];
  children?: {
    id: string;
    type: 'heading_3';
    text: RichTextItemResponse[];
  }[];
}[];

type NavigationProps = {
  navigationData: NavigationData;
};

// TODO: 컴포넌트 분리
const Navigation = ({ navigationData }: NavigationProps) => {
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
      { rootMargin: '-10% 0% -80%' },
    );

    document.querySelectorAll('main > h2, main > h3').forEach((element) => {
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
      <ol>
        {navigationData.map((block) => {
          const text = block.text[0].plain_text;
          return (
            <li key={block.id}>
              <a
                href={`#${block.id}`}
                css={css`
                  ${viewId === block.id ? `color: ${theme.font}` : ''};
                `}
              >
                {text}
              </a>
              {block.children && (
                <ol
                  css={css`
                    padding-left: 15px;
                  `}
                >
                  {block.children.map((child) => {
                    const text = child.text[0].plain_text;
                    return (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          css={css`
                            ${viewId === child.id ? `color: ${theme.font}` : ''};
                          `}
                        >
                          {text}
                        </a>
                      </li>
                    );
                  })}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Navigation;
