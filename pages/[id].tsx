import { motion } from 'framer-motion';
import Head from 'next/head';
import { fetchBlocks, fetchPage, fetchPageList } from '@/apis/notion';
import Block from '@/components/Block/Block';
import Header from '@/components/Detail/Header';
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
      <Header title={page.title} tags={page.tags} />
      <hr />
      {blocks.map((block, index) => (
        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} key={index}>
          <Block block={block} />
        </motion.div>
      ))}
      <hr />
    </>
  );
};

export default Detail;

export const getStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const posts = await fetchPageList(databaseId!);
  const paths = posts.map((post) => ({ params: { id: post.id } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params?.id;
  const page = await fetchPage(id as string);
  const blocks = await fetchBlocks(id as string);
  const ogs = require('open-graph-scraper');

  const bookmarkDataInjectedBlock = await Promise.all(
    blocks.map(async (block) => {
      if (block.type !== 'bookmark') return block;
      const { result } = await ogs({ url: block.bookmark.url });
      return {
        ...block,
        bookmark: {
          ...block.bookmark,
          title: result.ogTitle || result.twitterTitle || '',
          description: result.ogDescription || result.twitterDescription || '',
          image: (typeof result.ogImage === 'object' && !Array.isArray(result.ogImage) && result.ogImage.url) || '',
          favicon: result.favicon.startsWith('https://')
            ? result.favicon
            : 'https://' + result.requestUrl.split('/').slice(2, 3).join('') + result.favicon,
        },
      };
    }),
  );

  return { props: { page, blocks: bookmarkDataInjectedBlock } };
};
