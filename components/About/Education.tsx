import { horizontalTableStyle } from '@/components/About/style';
import TableTitle from '@/components/About/TableTitle';

const Education = () => {
  return (
    <section>
      <TableTitle>교육</TableTitle>
      <table css={horizontalTableStyle}>
        <tbody>
          <tr>
            <th>교육명</th>
            <td>부스트캠프 7기 웹 풀스택 과정</td>
          </tr>
          <tr>
            <th>교육기관명</th>
            <td>네이버 커넥트재단</td>
          </tr>
          <tr>
            <th>기간</th>
            <td>2022.07~2022.12</td>
          </tr>
          <tr>
            <th>설명</th>
            <td>
              <ul>
                <li>챌린지 기간의 4주간의 일일 미션을 통해 CS 학습을 하였습니다.</li>
                <li>멤버십 기간의 풀스택 개발로 웹 개발의 전반적 프로세스를 이해하게 되었습니다.</li>
                <li>지속적인 성장을 위한 개발자의 태도를 배웠습니다.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <table css={horizontalTableStyle}>
        <tbody>
          <tr>
            <th>교육명</th>
            <td>항해99 5기 심화반 프론트엔드 과정</td>
          </tr>
          <tr>
            <th>교육기관명</th>
            <td>스파르타 코딩클럽</td>
          </tr>
          <tr>
            <th>기간</th>
            <td>2022.01~2022.04</td>
          </tr>
          <tr>
            <th>설명</th>
            <td>
              <ul>
                <li>CS, 알고리즘 스터디를 운영하여 기초를 학습하였습니다.</li>
                <li>투표를 통해 동료 문제 해결 수상을 하였습니다.</li>
                <li>백엔드 개발자, 디자이너와의 팀 프로젝트를 통해 폭넓은 협업 경험을 하였습니다.</li>
                <li>6기 프로젝트 도우미와 7기 리액트 기술 매니저 역할을 하였습니다.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody css={horizontalTableStyle}>
          <tr>
            <th>대학명</th>
            <td>한양대학교</td>
          </tr>
          <tr>
            <th>전공</th>
            <td>원자력공학과</td>
          </tr>
          <tr>
            <th>기간</th>
            <td>2014.03~2021.02</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;
