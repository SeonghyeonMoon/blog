import styled from '@emotion/styled';
import type { Theme } from '@emotion/react';

type TagProps = {
  color?: keyof Theme;
};

const Tag = styled.li<TagProps>`
  font-size: 14px;
  background-color: ${({ color, theme }) => theme[color || 'default']};
  color: ${({ theme }) => theme.font};
  padding: 4px 6px 1px;
  border-radius: 3px;
  transition: all 0.25s linear;
`;

export default Tag;
