import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TagList from '@/components/TagList';

type Post = {
  id: string;
  title: string;
  tags: {
    id: string;
    name: string;
    color: keyof Theme;
  }[];
};

type PostListProps = {
  postList: Post[];
};

const PostList = ({ postList }: PostListProps) => {
  return (
    <ul
      css={css`
        margin: 0 auto;
        min-width: min-content;
        max-width: 800px;
      `}
    >
      {postList.map(({ id, title, tags }) => (
        <Link href={`/${id}`} key={id}>
          <motion.li
            key={id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            css={css`
              list-style: none;
            `}
          >
            <TagList tags={tags} />
            <h2
              css={css`
                margin-top: 0;
                margin-bottom: 10px;
              `}
            >
              {title}
            </h2>
            <hr />
          </motion.li>
        </Link>
      ))}
    </ul>
  );
};

export default PostList;
