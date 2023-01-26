import { css, useTheme } from '@emotion/react';

type SearchBarProps = {};

const SearchBar = ({}: SearchBarProps) => {
  const theme = useTheme();
  return (
    <input
      type='text'
      css={css`
        display: block;
        max-width: 800px;
        width: 100%;
        height: 40px;
        font-size: 16px;
        border-radius: 5px;
        border: transparent solid 2px;
        margin: 0 auto 30px;
        background: ${theme.default};
        padding: 0 10px;
        transition: all 0.2s linear;
        color: ${theme.font};

        &:focus {
          border-color: ${theme.gray};
          outline: none;
        }
      `}
      placeholder={'Search'}
    />
  );
};

export default SearchBar;
