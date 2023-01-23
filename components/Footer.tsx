import { css } from '@emotion/react';

const Footer = () => {
  return (
    <footer>
      <p
        css={css`
          padding: 40px;
          text-align: center;
        `}
      >
        © Copyright 2023. Moon All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
