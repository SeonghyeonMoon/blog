import { css } from '@emotion/react';
import TableTitle from '@/components/About/TableTitle';

const Education = () => {
  return (
    <section>
      <TableTitle>교육</TableTitle>
      <table
        css={css`
          th {
            text-align: left;
          }

          @media (max-width: 506px) {
            th:nth-of-type(3),
            td:nth-of-type(3) {
              display: none;
            }
          }
        `}
      >
        <thead>
          <tr>
            <th>기관명</th>
            <th>과정명</th>
            <th>기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>네이버 커넥트재단</td>
            <td>부스트캠프 웹 풀스택 7기</td>
            <td>2022.07~2022.12</td>
          </tr>
          <tr>
            <td>스파르타 코딩클럽</td>
            <td>항해99 5기 프론트엔드</td>
            <td>2022.01~2022.04</td>
          </tr>
          <tr>
            <td>한양대학교</td>
            <td>원자력 공학 학사</td>
            <td>2014.03~2020.02</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;
