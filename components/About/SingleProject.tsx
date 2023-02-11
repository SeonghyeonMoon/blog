import NewTabLink from '@/components/About/NewTabLink';
import { horizontalTableStyle } from '@/components/About/style';
import TableTitle from '@/components/About/TableTitle';

const SingleProject = () => {
  return (
    <section>
      <TableTitle>개인 프로젝트</TableTitle>
      <table css={horizontalTableStyle}>
        <tbody>
          <tr>
            <th>프로젝트 명</th>
            <td>Strawberry Moon</td>
          </tr>
          <tr>
            <th>개발 배경</th>
            <td>딸기 농사를 통해 매일 단가와 수량 등을 수기로 계산해서 기록하시던 부모님의 편의성을 개선</td>
          </tr>
          <tr>
            <th>개발 목표</th>
            <td>날짜별 폼을 통해 입력을 용이하게 하고, 자동 계산 및 차트를 통해 부가적인 계산이 필요없게 만든다. </td>
          </tr>
          <tr>
            <th>기간</th>
            <td>2022.12~2022.12</td>
          </tr>
          <tr>
            <th>깃허브</th>
            <td>
              <NewTabLink href='https://github.com/SunghyeonMoon/strawberry-moon' />
            </td>
          </tr>
          <tr>
            <th>사용 기술</th>
            <td>
              typescript, next.js, planet-scale, prisma, tailwind-css, react-query, react-spinners, react-toastify
            </td>
          </tr>
          <tr>
            <th>기능 및 역할</th>
            <td>
              <ul>
                <li>현재 날짜 표시 기능과 날짜 선택 기능이 있는 달력 컴포넌트 구현</li>
                <li>Chart.js를 통한 월, 품목 별 통계량 표시 기능 구현</li>
                <li>useSwipe Hook 구현을 통한 월, 날짜 변경 기능</li>
                <li>Next.js 서버에서 Prisma와 Planetscale을 통한 데이터 관리</li>
                <li>데이터 저장 성공, 실패에 따른 토스트 UI 표시 기능 구현</li>
                <li>데이터가 불러오는 중인 상황 인지를 위한 스피너를 통한 로딩 표시 기능 구현</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>프로젝트 의의</th>
            <td>
              타겟 사용자를 내 주변의 잘 알고있는 사람으로 지정하고 개발하여, 기능이나 UI 등을 정하는 과정에서 사용자를
              고려하기 쉬웠고, 즉각적인 피드백이 가능해서 좋았던 프로젝트
            </td>
          </tr>
        </tbody>
      </table>
      <table css={horizontalTableStyle}>
        <tbody>
          <tr>
            <th>프로젝트 명</th>
            <td>Notion API를 활용한 개인 블로그</td>
          </tr>
          <tr>
            <th>개발 배경</th>
            <td>자유롭게 편집이 가능한 개인 블로그의 필요성</td>
          </tr>
          <tr>
            <th>개발 목표</th>
            <td>Notion API를 통해서 포스팅을 관리하고, 직접 만들어 커스텀이 용이한 블로그 생성</td>
          </tr>
          <tr>
            <th>기간</th>
            <td>2023.01~진행 중</td>
          </tr>
          <tr>
            <th>깃허브</th>
            <td>
              <NewTabLink href='https://github.com/SunghyeonMoon/blog' />
            </td>
          </tr>
          <tr>
            <th>배포주소</th>
            <td>
              <NewTabLink href='https://blog-sunghyeonmoon.vercel.app' />
            </td>
          </tr>
          <tr>
            <th>사용 기술</th>
            <td>typescript, next.js, react-query, jest, emotion, notion API, three.js, framer-motion</td>
          </tr>
          <tr>
            <th>기능 및 역할</th>
            <td>
              <ul>
                <li>Notion API를 통해서 포스팅 목록 및 상세 페이지 블록 별 불러오기 구현 </li>
                <li>SSG를 통한 포스트 별 정적 페이지 생성으로 로드 시간 최소화</li>
                <li>Three.js를 통한 3D 애니메이션 구현</li>
                <li>emotion theme을 통한 다크모드 전환 구현</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SingleProject;
