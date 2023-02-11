import { css } from '@emotion/react';
import TagList from '@/components/TagList';
import type { TagType } from '@/types';

type HeaderProps = {
  title: string;
  tags: TagType[];
};

const Header = ({ title, tags }: HeaderProps) => {
  return (
    <header
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
      `}
    >
      <TagList tags={tags} />
      <h2
        css={css`
          margin-bottom: 10px;
        `}
      >
        {title}
      </h2>
    </header>
  );
};

export default Header;
