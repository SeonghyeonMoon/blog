import { css, Theme } from '@emotion/react';
import Link from 'next/link';
import { Fragment } from 'react';
import H2 from '@/components/Block/H2';
import Hr from '@/components/Block/Hr';
import P from '@/components/Block/P';
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
        <Fragment key={id}>
          <li>
            <TagList tags={tags} />
            <Link href={`/${id}`} key={id}>
              <H2
                css={css`
                  margin-top: 0;
                  margin-bottom: 5px;
                `}
              >
                {title}
              </H2>
            </Link>
            <P>{date}</P>
          </li>
          <Hr />
        </Fragment>
      ))}
    </ul>
  );
};

export default PostList;
