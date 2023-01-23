import { css } from '@emotion/react';
import type { ReactNode } from 'react';

type PostListProps = {
  children: ReactNode;
};

const PostList = ({ children }: PostListProps) => {
  return (
    <ul
      css={css`
        margin: 0 auto;
        min-width: min-content;
        max-width: 800px;
      `}
    >
      {children}
    </ul>
  );
};

export default PostList;
