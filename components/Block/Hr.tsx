import styled from '@emotion/styled';

const Hr = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.hr};
  transition: all 0.25s linear;
`;

export default Hr;
