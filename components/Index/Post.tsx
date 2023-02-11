import { css, useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TagList from '@/components/TagList';
import type { PostType } from '@/types';

type PostProps = PostType;

const Post = ({ id, tags, title }: PostProps) => {
  const theme = useTheme();

  return (
    <Link href={`/${id}`}>
      <motion.li
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        css={css`
          list-style: none;
          padding: 10px 0;
          border-bottom: 1px solid ${theme.hr};

          &:hover {
            cursor: pointer;
            h2 {
              opacity: 1;
            }
          }
        `}
      >
        <TagList tags={tags} />
        <h2
          css={css`
            margin-top: 0;
            color: ${theme.font};
            opacity: 0.8;
            transition: all 0.1s linear;
          `}
        >
          {title}
        </h2>
      </motion.li>
    </Link>
  );
};

export default Post;