import styled from '@emotion/styled';
import type { Theme } from '@emotion/react';

type PProps = {
  color?: keyof Theme;
};

const P = styled.p<PProps>`
  padding: 3px 2px;
  color: ${({ color, theme }) => theme[color || 'font']};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  transition: all 0.25s linear;
`;

export default P;
