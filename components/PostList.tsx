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
  date: string;
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
      {postList.map(({ id, title, tags, date }) => (
        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} key={id}>
          <li
            css={css`
              list-style: none;
            `}
          >
            <TagList tags={tags} />
            <Link href={`/${id}`} key={id}>
              <h2
                css={css`
                  margin-top: 0;
                  margin-bottom: 5px;
                `}
              >
                {title}
              </h2>
            </Link>
            <p>{date}</p>
          </li>
          <hr />
        </motion.div>
      ))}
    </ul>
  );
};

export default PostList;
