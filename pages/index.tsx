import Head from 'next/head';
import { fetchPosts } from '@/apis/notion';
import type { InferGetStaticPropsType } from 'next';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Title</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
  </>
);

export default Home;

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const posts = await fetchPosts(databaseId!);
  return { props: { posts } };
};
