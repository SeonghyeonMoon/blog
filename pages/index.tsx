import { css, useTheme } from '@emotion/react';
import Head from 'next/head';
import { Fragment } from 'react';
import { fetchPosts } from '@/apis/notion';
import Hr from '@/components/Block/Hr';
import Footer from '@/components/Footer';
import Post from '@/components/Post';
import PostList from '@/components/PostList';
import type { InferGetStaticPropsType } from 'next';

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Moon</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
      <main>
        <PostList>
          {posts.map(({ id, title, tags, date }) => (
            <Fragment key={id}>
              <Post id={id} title={title} tags={tags} date={date} />
              <Hr />
            </Fragment>
          ))}
        </PostList>
      </main>
      <Footer />
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const posts = await fetchPosts(databaseId!);
  return { props: { posts } };
};
