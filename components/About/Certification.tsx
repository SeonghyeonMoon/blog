import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const Certification = () => {
  return (
    <motion.section>
      <h2
        css={css`
          margin-bottom: 10px;
          text-align: left;
          font-size: 20px;
        `}
      >
        자격증
      </h2>
      <table
        css={css`
          margin-bottom: 20px;
          th {
            text-align: left;
          }
          tr {
            td:nth-of-type(1) {
              text-align: left;
              width: 50%;
            }
            td:nth-of-type(2) {
              text-align: left;
              width: 50%;
            }
          }
          td {
            text-align: center;
          }
        `}
      >
        <thead>
          <tr>
            <th>자격증 명</th>
            <th>발급기관</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>정보 처리 기사</td>
            <td>한국산업인력공단</td>
          </tr>
          <tr>
            <td>웹 디자인 기능사</td>
            <td>한국산업인력공단</td>
          </tr>
          <tr>
            <td>컴퓨터 활용능력 1급</td>
            <td>대한상공회의소</td>
          </tr>
        </tbody>
      </table>
    </motion.section>
  );
};

export default Certification;
