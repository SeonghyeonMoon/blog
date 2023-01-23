import { css, Theme } from '@emotion/react';
import Link from 'next/link';
import H2 from '@/components/Block/H2';
import P from '@/components/Block/P';
import TagList from '@/components/TagList';

type PostProps = {
  id: string;
  title: string;
  tags: {
    id: string;
    name: string;
    color: keyof Theme;
  }[];
  date: string;
};

const Post = ({ id, title, tags, date }: PostProps) => {
  return (
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
  );
};

export default Post;
