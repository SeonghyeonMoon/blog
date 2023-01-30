import Head from 'next/head';
import { fetchPageList } from '@/apis/notion';
import Description from '@/components/Description';
import PostList from '@/components/PostList';
import SearchBar from '@/components/SearchBar';
import type { InferGetStaticPropsType } from 'next';

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Moon</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Description />
      <SearchBar />
      <hr />
      <PostList postList={posts} />
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const posts = await fetchPageList(databaseId!);
  return { props: { posts } };
};
