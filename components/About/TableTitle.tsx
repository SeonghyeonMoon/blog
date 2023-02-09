import { css } from '@emotion/react';

type TableTitleProps = {
  children: string;
};

const TableTitle = ({ children }: TableTitleProps) => {
  return (
    <h2
      css={css`
        margin-bottom: 10px;
        text-align: left;
        font-size: 20px;
      `}
    >
      {children}
    </h2>
  );
};

export default TableTitle;
