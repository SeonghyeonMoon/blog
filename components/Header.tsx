import { css } from '@emotion/react';
import Image from 'next/image';
import H1 from './Block/H1';
import Button from './Button';

type HeaderProps = {
  toggleTheme: () => void;
};

const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px 0;
      `}
    >
      <H1
        css={css`
          margin-top: 0;
        `}
      >
        Moon
      </H1>
      <ul
        css={css`
          display: flex;
          gap: 20px;
        `}
      >
        <li>Home</li>
        <li>Posts</li>
        <li>About</li>
      </ul>
      <Button onClick={toggleTheme}>
        <Image src='/moon.png' alt='moon' width={15} height={15} />
      </Button>
    </header>
  );
};

export default Header;
