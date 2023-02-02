import { css, useTheme } from '@emotion/react';

type BookmarkProps = {
  url: string;
  title: string;
  description: string;
  favicon: string;
  image: string;
};

const Bookmark = ({ url, title, description, favicon, image }: BookmarkProps) => {
  const theme = useTheme();
  return (
    <a
      href={url}
      css={css`
        display: flex;
        border: 1px solid ${theme.gray};
        height: 100px;
        justify-content: space-between;
        border-radius: 5px;
        margin-bottom: 10px;
      `}
    >
      <div
        css={css`
          flex: 1;
          padding: 12px 14px;
        `}
      >
        <h3
          css={css`
            margin-top: 0;
            font-size: 14px;
          `}
        >
          {title}
        </h3>
        <p
          css={css`
            font-size: 12px;
            height: 36px;
            overflow: hidden;
            color: ${theme.gray};
          `}
        >
          {description}
        </p>

        <p
          css={css`
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 6px;
          `}
        >
          <img src={favicon} alt={'favicon'} width={16} height={16} />
          {url}
        </p>
      </div>
      <img
        src={image as string}
        alt={'bookmark'}
        width={200}
        height={98}
        css={css`
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        `}
      />
    </a>
  );
};

export default Bookmark;
