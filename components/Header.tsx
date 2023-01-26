import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
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
      <Link href='/'>
        <h1
          css={css`
            margin-top: 0;
          `}
        >
          Moon
        </h1>
      </Link>
      <ul
        css={css`
          display: flex;
          gap: 20px;
        `}
      >
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      <Button onClick={toggleTheme}>
        <Image src='/moon.png' alt='moon' width={15} height={15} />
      </Button>
    </header>
  );
};

export default Header;
