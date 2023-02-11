import { css } from '@emotion/react';

const horizontalTableStyle = css`
  @media (max-width: 497px) {
    th,
    td {
      display: block;
      width: 100%;
      text-align: left;
    }
  }
`;

const projectImagesStyle = css`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;

  @media (max-width: 497px) {
    flex-direction: column;
  }
`;

export { horizontalTableStyle, projectImagesStyle };
