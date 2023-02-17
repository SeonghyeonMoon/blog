import Head from 'next/head';
import { useState } from 'react';
import { fetchPageList } from '@/apis/notion';
import { Description, PostList, SearchBar } from '@/components/Index';
import useFade from '@/hooks/useFade';
import type { InferGetStaticPropsType } from 'next';

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useFade({ selector: 'main > *, main > ul > a' });

  const [postList, setPostList] = useState(posts);

  const handleSearch = (searchText: string) => {
    const filteredPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setPostList(filteredPosts);
  };

  return (
    <>
      <Head>
        <title>Moon</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Description />
        <SearchBar handleSearch={handleSearch} />
        <hr />
        <PostList postList={postList} />
      </main>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const posts = await fetchPageList(databaseId!);
  return { props: { posts } };
};
