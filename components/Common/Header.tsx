import { css, useTheme } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
        backdrop-filter: blur(4px);
        z-index: 10;
        transition: background-color 0.25s linear;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1330px;
          margin: 0 auto;
          padding: 10px 20px;
        `}
      >
        <Link href='/'>
          <h1>Moon</h1>
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
        <button
          onClick={toggleTheme}
          css={css`
            padding: 3px 7px;
            border-radius: 5px;
            border: none;
            background-color: ${theme.hr};
            transition: all 0.25s linear;

            &:hover {
              filter: brightness(0.9);
              cursor: pointer;
            }
            &:active {
              filter: brightness(0.8);
            }
          `}
        >
          <Image src='/moon.png' alt='moon' width={20} height={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
