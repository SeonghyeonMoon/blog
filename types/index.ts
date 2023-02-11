import type { Theme } from '@emotion/react';

type TagType = {
  id: string;
  name: string;
  color: keyof Theme;
};

export type PostType = {
  id: string;
  title: string;
  tags: TagType[];
};
