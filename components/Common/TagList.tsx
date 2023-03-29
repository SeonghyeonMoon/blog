import { css, Theme, useTheme } from '@emotion/react';

type TagListProps = {
  tagList: {
    id: string;
    name: string;
    color: keyof Theme;
  }[];
};

const TagList = ({ tagList }: TagListProps) => {
  const theme = useTheme();
  return (
    <ul
      css={css`
        display: flex;
        gap: 6px;
        margin-bottom: 5px;
      `}
    >
      {tagList.map(({ id, name, color }) => (
        <li
          key={id}
          css={css`
            font-size: 14px;
            background-color: ${theme[color || 'default']};
            color: ${theme.font};
            padding: 1px 6px 0;
            border-radius: 3px;
            transition: all 0.25s linear;
            list-style: none;
          `}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
