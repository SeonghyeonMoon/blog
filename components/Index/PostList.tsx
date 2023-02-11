import { css } from '@emotion/react';
import Post from './Post';
import type { PostType } from '@/types';

type PostListProps = {
  postList: PostType[];
};

const PostList = ({ postList }: PostListProps) => {
  return (
    <ul
      css={css`
        margin: 10px auto;
        display: flex;
        flex-direction: column;
      `}
    >
      {postList.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </ul>
  );
};

export default PostList;
