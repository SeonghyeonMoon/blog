import { css, Theme } from '@emotion/react';
import Tag from '@/components/Tag';

type TagListProps = {
  tags: {
    id: string;
    name: string;
    color: keyof Theme;
  }[];
};

const TagList = ({ tags }: TagListProps) => {
  return (
    <ul
      css={css`
        display: flex;
        gap: 6px;
        margin-bottom: 5px;
      `}
    >
      {tags.map(({ id, name, color }) => (
        <Tag
          key={id}
          color={color}
          onClick={() => {
            console.log(name);
          }}
        >
          {name}
        </Tag>
      ))}
    </ul>
  );
};

export default TagList;
