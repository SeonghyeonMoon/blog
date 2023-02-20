import { css } from '@emotion/react';

const horizontalTableStyle = css`
  @media (max-width: 497px) {
    th,
    td {
      display: block;
      width: 100%;
      text-align: left;
      border-top-width: 0.5px;
      border-bottom-width: 0.5px;
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
