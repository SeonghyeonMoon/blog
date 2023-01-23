import styled from '@emotion/styled';
import type { Theme } from '@emotion/react';

type ButtonProps = {
  color?: keyof Theme;
};

const Button = styled.button<ButtonProps>`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: ${({ color, theme }) => theme[color || 'default']};
  color: ${({ theme }) => theme.font};
  transition: all 0.24s linear;
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
  &:active {
    filter: brightness(0.8);
  }
`;

export default Button;
