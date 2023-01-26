import { Client, isFullBlock, isFullPage } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export type Post = {
  id: string;
  title: string;
  date: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  name: string;
  color: NotionColorsTypes;
};

export type NotionColorsTypes =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red';

export const fetchPosts = async (databaseId: string): Promise<Post[]> => {
  const { results } = await notion.databases.query({ database_id: databaseId });
  return results.filter(isFullPage).map((page) => ({
    id: page.id,
    title: page.properties.Name.type === 'title' ? page.properties.Name.title[0].plain_text : '',
    cover: page.cover?.type === 'external' ? page.cover.external.url : '',
    date: page.properties.Date.type === 'date' ? page.properties.Date.date?.start ?? '' : '',
    tags: page.properties.Tags.type === 'multi_select' ? page.properties.Tags.multi_select : [],
  }));
};

export const fetchPage = async (pageId: string) => {
  const page = await notion.pages.retrieve({ page_id: pageId });
  if (!isFullPage(page)) return;
  return {
    title: page.properties.Name.type === 'title' ? page.properties.Name.title[0].plain_text : '',
    cover: page.cover?.type === 'external' ? page.cover.external.url : '',
    date: page.properties.Date.type === 'date' ? page.properties.Date.date?.start ?? '' : '',
    tags: page.properties.Tags.type === 'multi_select' ? page.properties.Tags.multi_select : [],
  };
};

enum BlockTypes {
  heading_1,
  heading_2,
  heading_3,
  paragraph,
  bulleted_list_item,
  numbered_list_item,
  code,
}

export type BlockType = {
  id: string;
  type: keyof typeof BlockTypes;
  text: string;
  children: (BlockType | undefined)[] | null;
  hasChildren: boolean;
  language?: string;
};

const convertBlock = (block: any): BlockType | undefined => {
  if (block.type === 'heading_1') {
    return {
      id: block.id,
      type: block.type,
      hasChildren: block.has_children,
      text: block[block.type].rich_text.reduce(
        (acc: string, { plain_text }: { plain_text: string }) => acc + plain_text,
        '',
      ),
      children: null,
    };
  }
  if (block.type === 'heading_2') {
    return {
      id: block.id,
      type: block.type,
      hasChildren: block.has_children,
      text: block[block.type].rich_text.reduce(
        (acc: string, { plain_text }: { plain_text: string }) => acc + plain_text,
        '',
      ),
      children: null,
    };
  }
  if (block.type === 'heading_3') {
    return {
      id: block.id,
      type: block.type,
      hasChildren: block.has_children,
      text: block[block.type].rich_text.reduce(
        (acc: string, { plain_text }: { plain_text: string }) => acc + plain_text,
        '',
      ),
      children: null,
    };
  }
  if (block.type === 'paragraph') {
    return {
      id: block.id,
      type: block.type,
      hasChildren: block.has_children,
      text: block[block.type].rich_text.reduce(
        (acc: string, { plain_text }: { plain_text: string }) => acc + plain_text,
        '',
      ),
      children: null,
    };
  }
  if (block.type === 'bulleted_list_item') {
    return {
      id: block.id,
      type: block.type,
      hasChildren: block.has_children,
      text: block[block.type].rich_text.reduce(
        (acc: string, { plain_text }: { plain_text: string }) => acc + plain_text,
        '',
      ),
      children: null,
    };
  }
  if (block.type === 'numbered_list_item') {
    return {
      id: block.id,
      type: block.type,
      hasChildren: block.has_children,
      text: block[block.type].rich_text.reduce(
        (acc: string, { plain_text }: { plain_text: string }) => acc + plain_text,
        '',
      ),
      children: null,
    };
  }
  if (block.type === 'code') {
    return {
      id: block.id,
      type: block.type,
      hasChildren: block.has_children,
      text: block[block.type].rich_text.reduce(
        (acc: string, { plain_text }: { plain_text: string }) => acc + plain_text,
        '',
      ),
      children: null,
      language: block[block.type].language,
    };
  }
};

export const fetchBlocks = async (blockId: string): Promise<(BlockType | undefined)[]> => {
  const { results } = await notion.blocks.children.list({
    block_id: blockId,
  });

  const hasChildrenBlocks: BlockType[] = [];
  const blocks = results
    .filter(isFullBlock)
    .map((block) => {
      let result = convertBlock(block);
      if (result && block.has_children) {
        hasChildrenBlocks.push(result);
      }
      return result;
    })
    .filter((block) => block !== undefined);

  while (hasChildrenBlocks.length > 0) {
    const block = hasChildrenBlocks.pop();
    if (!block) continue;
    const { results } = await notion.blocks.children.list({
      block_id: block.id,
    });
    block.children = results
      .filter(isFullBlock)
      .map((block) => {
        const result = convertBlock(block);
        if (result && block.has_children) {
          hasChildrenBlocks.push(result);
        }
        return result;
      })
      .filter((block) => block !== undefined);
  }

  return blocks;
};
