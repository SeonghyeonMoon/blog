import { Client, isFullBlock, isFullPage } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const fetchPageList = async (databaseId: string) => {
  const { results } = await notion.databases.query({ database_id: databaseId });
  return results.filter(isFullPage).map((page) => ({
    id: page.id,
    title: page.properties.Name.type === 'title' ? page.properties.Name.title[0].plain_text : '',
    tags: page.properties.Tags.type === 'multi_select' ? page.properties.Tags.multi_select : [],
  }));
};

export const fetchPage = async (pageId: string) => {
  const page = await notion.pages.retrieve({ page_id: pageId });
  if (!isFullPage(page)) return;
  return {
    title: page.properties.Name.type === 'title' ? page.properties.Name.title[0].plain_text : '',
    cover: page.cover?.type === 'external' ? page.cover.external.url : '',
    tags: page.properties.Tags.type === 'multi_select' ? page.properties.Tags.multi_select : [],
  };
};

export const fetchBlocks = async (blockId: string) => {
  const { results } = await notion.blocks.children.list({ block_id: blockId });
  const blocks = results.filter(isFullBlock);

  const hasChildrenBlocks = blocks.filter((block) => block.has_children);
  while (hasChildrenBlocks.length > 0) {
    const block = hasChildrenBlocks.pop();
    if (!block) continue;
    const { results } = await notion.blocks.children.list({ block_id: block.id });
    const blockObjectResponse = results.filter(isFullBlock);

    // @ts-ignore
    block.children = blockObjectResponse.map((block) => {
      if (block.has_children) {
        hasChildrenBlocks.push(block);
      }
      return block;
    });
  }

  return blocks;
};
