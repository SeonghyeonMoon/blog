import { css, Theme, useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Fragment } from 'react';
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
  const theme = useTheme();
  return (
    <ul
      css={css`
        margin: 10px auto;
        display: flex;
        flex-direction: column;
      `}
    >
      {postList.map(({ id, title, tags }) => (
        <Fragment key={id}>
          <Link href={`/${id}`}>
            <motion.li
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              css={css`
                list-style: none;
                padding: 10px;
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
        </Fragment>
      ))}
    </ul>
  );
};

export default PostList;
