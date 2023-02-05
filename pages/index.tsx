import Head from 'next/head';
import { useState } from 'react';
import { fetchPageList } from '@/apis/notion';
import Description from '@/components/Description';
import PostList from '@/components/PostList';
import SearchBar from '@/components/SearchBar';
import type { InferGetStaticPropsType } from 'next';

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
      <Description />
      <SearchBar handleSearch={handleSearch} />
      <hr />
      <PostList postList={postList} />
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const posts = await fetchPageList(databaseId!);
  return { props: { posts } };
};
