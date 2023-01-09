import Head from 'next/head';
import Link from 'next/link';
import { fetchPosts } from '@/apis/notion';
import type { InferGetStaticPropsType } from 'next';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>Title</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <main>
      <ul className='mx-auto w-auto min-w-max max-w-2xl'>
        {posts.map(({ id, title, tags, date }) => (
          <>
            <Link href={`/${id}`} key={id}>
              <li className='text-white p-2'>
                <ul className='my-2 flex gap-1.5'>
                  {tags.map(({ id, name, color }) => (
                    <li key={id} className={`rounded bg-${color}-light px-1.5 dark:bg-${color}-dark`}>
                      {name}
                    </li>
                  ))}
                </ul>
                <h2 className='my-2 text-2xl font-normal'>{title}</h2>
                <p className='text-gray-dark'>{date}</p>
              </li>
            </Link>
            <hr className='border-t-hr-light dark:border-t-hr-dark' />
          </>
        ))}
      </ul>
      <footer className='p-10 text-center'>
        <p>© Copyright 2023. Moon All rights reserved.</p>
      </footer>
    </main>
  </>
);

export default Home;

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const posts = await fetchPosts(databaseId!);
  return { props: { posts } };
};
