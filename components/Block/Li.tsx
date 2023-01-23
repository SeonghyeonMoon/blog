import styled from '@emotion/styled';

const Li = styled.li`
  padding: 3px 2px;
  color: ${({ theme }) => theme['font']};
  font-size: 16px;
  font-weight: 600;
  transition: all 0.25s linear;
  list-style-position: inside;
`;

export default Li;
