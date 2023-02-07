import { css } from '@emotion/react';

const Education = () => {
  return (
    <section>
      <h2
        css={css`
          margin-bottom: 10px;
          text-align: left;
          font-size: 20px;
        `}
      >
        교육
      </h2>
      <table
        css={css`
          margin-bottom: 20px;
          th {
            text-align: left;
          }
          tr {
            td:nth-of-type(1) {
              width: 40%;
            }
            td:nth-of-type(2) {
              width: 40%;
            }
            td:nth-of-type(3) {
              width: 20%;
            }
          }
        `}
      >
        <thead>
          <tr>
            <th>교육 기관</th>
            <th>교육 과정</th>
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
