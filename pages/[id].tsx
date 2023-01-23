import { css } from '@emotion/react';
import Head from 'next/head';
import { fetchBlocks, fetchPage, fetchPosts } from '@/apis/notion';
import Block from '@/components/Block/Block';
import H2 from '@/components/Block/H2';
import P from '@/components/Block/P';
import TagList from '@/components/TagList';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

const Detail = ({ page, blocks }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!page || !blocks) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Moon | {page.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        css={css`
          margin: 0 auto;
          max-width: 800px;
        `}
      >
        <H2>{page.title}</H2>
        <TagList tags={page.tags} />
        <P>{page.date}</P>
        {blocks.map((block, index) => (
          <Block block={block} key={index} />
        ))}
      </main>
    </>
  );
};

export default Detail;

export const getStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const posts = await fetchPosts(databaseId!);
  const paths = posts.map((post) => ({ params: { id: post.id } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params?.id;
  const page = await fetchPage(id as string);
  const blocks = await fetchBlocks(id as string);

  return { props: { page, blocks } };
};
