import Head from 'next/head';
import { fetchPosts } from '@/apis/notion';
import type { InferGetStaticPropsType } from 'next';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Title</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <ul>
      {posts.map(({ id, title, tags }) => (
        <li key={id}>
          <h2 className='text-white my-2 text-2xl font-normal'>{title}</h2>
          <ul className='flex gap-1.5'>
            {tags.map(({ id, name, color }) => (
              <li
                key={id}
                className={`rounded bg-${color}-light px-1.5 text-font-light dark:bg-${color}-dark dark:text-font-dark`}
              >
                {name}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </>
);

export default Home;

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const posts = await fetchPosts(databaseId!);
  return { props: { posts } };
};
