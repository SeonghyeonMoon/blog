import type { Theme } from '@emotion/react';

type TagType = {
  id: string;
  name: string;
  color: keyof Theme;
};

type PostType = {
  id: string;
  title: string;
  tagList: TagType[];
};

export type { TagType, PostType };
