import { Client, isFullBlock, isFullPage } from '@notionhq/client';
import bindListBlocks from '@/utils/bindListBlocks';
import convertBlock from '@/utils/convertBlock';
import type { PostType } from '@/types';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const getPostOrder = (page: PageObjectResponse): number => {
  return (page.properties.order.type === 'number' && page.properties.order.number) || Infinity;
};

const byPublic = (page: PageObjectResponse): boolean => {
  return page.properties.public.type === 'checkbox' && page.properties.public.checkbox;
};

const byOrder = (a: PageObjectResponse, b: PageObjectResponse): number => {
  return getPostOrder(a) - getPostOrder(b);
};

const convertPost = (page: PageObjectResponse): PostType => {
  return {
    id: page.id,
    title: page.properties.name.type === 'title' ? page.properties.name.title[0].plain_text : '',
    tagList: page.properties.tags.type === 'multi_select' ? page.properties.tags.multi_select : [],
  };
};

export const getPostList = async (): Promise<PostType[]> => {
  if (!process.env.NOTION_DATABASE_ID) throw new Error('NOTION_DATABASE_ID is not defined.');
  const { results } = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID });
  return results.filter(isFullPage).filter(byPublic).sort(byOrder).map(convertPost);
};

export const fetchPage = async (pageId: string) => {
  const page = await notion.pages.retrieve({ page_id: pageId });
  if (!isFullPage(page)) return;
  return {
    title: page.properties.name.type === 'title' ? page.properties.name.title[0].plain_text : '',
    tagList: page.properties.tags.type === 'multi_select' ? page.properties.tags.multi_select : [],
  };
};

export const fetchBlocks = async (blockId: string) => {
  const { results } = await notion.blocks.children.list({ block_id: blockId });
  const blocks = await Promise.all(results.filter(isFullBlock).map(convertBlock));

  const hasChildrenBlocks = blocks.filter((block) => block?.hasChildren);
  while (hasChildrenBlocks.length > 0) {
    const block = hasChildrenBlocks.pop();
    if (!block) continue;
    const { results } = await notion.blocks.children.list({ block_id: block.id });
    const blockObjectResponse = await Promise.all(results.filter(isFullBlock).map(convertBlock));

    // @ts-ignore
    block.children = blockObjectResponse.map((block) => {
      if (block?.hasChildren) {
        hasChildrenBlocks.push(block);
      }
      return block;
    });
  }

  return bindListBlocks(blocks);
};
