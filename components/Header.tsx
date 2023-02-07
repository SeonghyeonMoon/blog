import { css, useTheme } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from './Button';

type HeaderProps = {
  toggleTheme: () => void;
};

const Header = ({ toggleTheme }: HeaderProps) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <header
      css={css`
        position: sticky;
        top: 0;
        background-color: ${theme.background};
        z-index: 10;
        transition: background-color 0.25s linear;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 880px;
          margin: 0 auto;
          padding: 10px 0;
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
            list-style: none;
          `}
        >
          <li
            css={css`
              transition: color 0.1s linear;
              color: ${router.pathname === '/about' ? theme.gray : theme.font};

              &:hover {
                cursor: pointer;
                color: ${theme.font};
              }
            `}
          >
            <Link href='/'>Posts</Link>
          </li>
          <li
            css={css`
              transition: color 0.1s linear;
              color: ${router.pathname !== '/about' ? theme.gray : theme.font};

              &:hover {
                cursor: pointer;
                color: ${theme.font};
              }
            `}
          >
            <Link href='/about'>About</Link>
          </li>
        </ul>
        <Button onClick={toggleTheme}>
          <Image src='/moon.png' alt='moon' width={15} height={15} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
