import { css } from '@emotion/react';
import TableTitle from '@/components/About/TableTitle';

const Certification = () => {
  return (
    <section>
      <TableTitle>자격증</TableTitle>
      <table
        css={css`
          th {
            text-align: left;
          }
        `}
      >
        <thead>
          <tr>
            <th>자격증명</th>
            <th>발급기관</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>정보처리기사</td>
            <td>한국산업인력공단</td>
          </tr>
          <tr>
            <td>웹디자인기능사</td>
            <td>한국산업인력공단</td>
          </tr>
          <tr>
            <td>컴퓨터활용능력 1급</td>
            <td>대한상공회의소</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Certification;
