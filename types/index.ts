import type { Theme } from '@emotion/react';

type TagType = {
  id: string;
  name: string;
  color: keyof Theme;
};

type PostType = {
  id: string;
  title: string;
  tags: TagType[];
};

export type { TagType, PostType };
