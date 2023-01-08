import { Client, isFullPage } from '@notionhq/client';

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
