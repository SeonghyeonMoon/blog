import styled from '@emotion/styled';

const DarkModeToggleButton = styled.button`
  background-color: ${({ theme }) => theme.default};
  border: ${({ theme }) => `1px solid ${theme.hr}`};
  position: fixed;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  padding: 10px;
  transition: all 0.25s linear;
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
`;

export default DarkModeToggleButton;
