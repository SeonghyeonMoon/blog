import { css } from '@emotion/react';
import NewTabLink from '@/components/About/NewTabLink';
import ProjectImage from '@/components/About/ProjectImage';
import { horizontalTableStyle, projectImagesStyle } from '@/components/About/style';
import TableTitle from '@/components/About/TableTitle';

const TeamProject = () => {
  return (
    <section>
      <TableTitle>팀 프로젝트</TableTitle>
      <table css={horizontalTableStyle}>
        <tbody>
          <tr>
            <th>프로젝트 명</th>
            <td>와글와글</td>
          </tr>
          <tr>
            <th>개발 배경</th>
            <td>회사, 학교 등의 커뮤니티 내에서 같은 관심사를 가신 사람들을 찾아 소그룹이 생성되는 과정의 번거로움</td>
          </tr>
          <tr>
            <th>개발 목표</th>
            <td>
              관심사를 쉽게 등록하고, 관심사들을 크기가 속한 사람의 수에 비례한 원들로 시각화하여 나와 같은 관심사를
              가진 사람들과 커뮤니티 내의 관심사들을 알아가고 참여하는 과정을 쉽고 재미있게한다.
            </td>
          </tr>
          <tr>
            <th>기간</th>
            <td>2022.11~2022.12</td>
          </tr>
          <tr>
            <th>깃허브</th>
            <td>
              <NewTabLink href='https://github.com/boostcampwm-2022/web17-waglewagle' />
            </td>
          </tr>
          <tr>
            <th>배포주소</th>
            <td>
              <NewTabLink href='https://www.waglewagle.link' />
            </td>
          </tr>
          <tr>
            <th>프로젝트 인원</th>
            <td>4인 팀 프로젝트(프론트엔드 2명, 백엔드 2명)</td>
          </tr>
          <tr>
            <th>사용 기술</th>
            <td>Typescript, Next.js, React Query, Jest, Sass</td>
          </tr>
          <tr>
            <th>기능</th>
            <td>
              <div css={projectImagesStyle}>
                <ProjectImage url='/wagle-intro.png' description='소개 페이지' />
                <ProjectImage url='/wagle-main.png' description='메인 페이지' />
              </div>
              <hr />
              <ul>
                <li>물리 엔진을 통해 자발적으로 움직이는 시각화 데이터</li>
                <li>검색 기능을 통해 이미 생성된 관심사 확인 및 중복 관심사 생성 방지</li>
                <li>관심사 별 게시판을 통해 의사소통 기능</li>
                <li>OAuth를 통한 소셜 로그인 기능</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>역할</th>
            <td>
              <ul>
                <li>
                  관심사의 효율적인 시각적 배치를 위한 물리 엔진 구현 및 Transition, Transport 등의 CSS 속성들의 연계를
                  통한 GPU 활용으로 CPU 사용량 50% 이상 최적화
                </li>
                <li>
                  탐색이 빈번하게 발생하는 검색 엔진의 특성상 단어가 많은 경우 발생하는 부하를 방지하기 위해 정규표현식,
                  이분 탐색에서 트라이로 알고리즘 변경을 통해 탐색 시간 복잡도를 O(NM)에서 O(M)까지 감소 (N: 존재하는
                  단어 개수, M: 검색어 길이)
                </li>
                <li>
                  Lighthouse를 통한 웹 페이지 성능 측정 및 개선
                  <ul>
                    <li>
                      Next를 통한 Code Splitting, Lazy Loading과 폰트 파일 압축 및 캐싱 등의 적용으로 퍼포먼스 점수를
                      60점에서 94점으로 개선
                    </li>
                    <li>
                      기본 언어 설정을 위한 lang 태그, 배경색과 글자색 대비율 증가를 통해 접근성 점수 73점에서 100점으로
                      개선
                    </li>
                    <li>SSR와 SSG 적용과 메타 태그 작성으로 SEO 점수 85점에서 100점으로 개선</li>
                  </ul>
                </li>
                <li>React Query를 통한 API 통신 로직 재사용 및 데이터 실시간성을 위한 Short Polling 적용</li>
                <li>
                  컴파일 과정에서 버그 방지와 협업에서의 개발 효율 향상 등을 위해 Utillity Type, Generic 등의 Typescript
                  문법 활용 및 엄격한 ESLint 규칙 적용
                </li>
                <li>중복 코드의 최소화 및 UI와 비즈니스 로직 분리를 위해 Custom Hook 활용</li>
                <li>검색 엔진과 물리 엔진 등의 클라이언트 비즈니스 로직에 Jest 유닛 테스트 작성</li>
                <li>Next 서버 NCP 배포 및 Github Actions으로 CI / CD Workflow 작성</li>
                <li>프로젝트 협업, 문서화를 위한 Notion과 Github의 Issue, Project, Wiki 등의 기능 적극 활용</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>프로젝트 의의</th>
            <td>클라이언트에서 물리엔진 구현이나 성능 최적화 등 기술적인 도전을 많이 해볼 수 있었던 프로젝트</td>
          </tr>
        </tbody>
      </table>
      <table css={horizontalTableStyle}>
        <tbody>
          <tr>
            <th>프로젝트 명</th>
            <td>Que!(Question us everything!)</td>
          </tr>
          <tr>
            <th>프로젝트 배경</th>
            <td>비대면 교육이 많이 활성화 되었지만 교육에 특화된 스트리밍 서비스의 부재</td>
          </tr>
          <tr>
            <th>프로젝트 목표</th>
            <td>질문하기, 채팅, 반응하기 등 교육에 필요한 기능을 추가한 실시간 스트리밍 교육 서비스를 제공한다.</td>
          </tr>
          <tr>
            <th>프로젝트 기간</th>
            <td>2022.03~2022.04</td>
          </tr>
          <tr>
            <th>깃허브</th>
            <td>
              <NewTabLink href='https://github.com/Hanghae99-5-Team1' />
            </td>
          </tr>
          <tr>
            <th>배포주소</th>
            <td>
              <NewTabLink href='https://everyque.com' />
            </td>
          </tr>
          <tr>
            <th>프로젝트 인원</th>
            <td>6인 팀 프로젝트(프론트엔드 2명, 백엔드 2명, 디자이너 2명)</td>
          </tr>
          <tr>
            <th>사용 기술</th>

            <td>React, Redux, Styled Components, Socket.io</td>
          </tr>
          <tr>
            <th>기능</th>
            <td>
              <div
                css={[
                  projectImagesStyle,
                  css`
                    width: 100%;
                  `,
                ]}
              >
                <ProjectImage url='/que-main.png' description='메인 페이지' />
                <ProjectImage url='/que-class.png' description='강의실' />
              </div>
              <hr />
              <ul>
                <li>실시간 동영상 스트리밍 서비스 기능</li>
                <li>채팅, 질문하기, 반응하기 등 실시간 수업 소통 수단 기능</li>
                <li>강의별 게시판 제공으로 공지, 질문 등 의사소통 기능</li>
                <li>등록한 강의의 일정이 자동으로 반영되어 표시되는 달력 기능</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>역할</th>
            <td>
              <ul>
                <li>프로젝트 리더로 기획, 디자인, 개발, 배포 등을 포함한 풀 사이클 프로젝트 리드</li>
                <li>
                  실시간 동영상 스트리밍 서비스를 위해 스트리밍 방식에 대한 비교와 1:N 스트리밍이라는 프로젝트 특성을
                  고려하여 HLS 기반으로 동영상 스트리밍 구현
                </li>
                <li>감정 표현하기, 채팅 등의 실시간 소통 기능들을 위해 Socket 통신 로직 작성</li>
                <li>Access 토큰 만료 예외 처리를 위한 Axios Interceptor를 활용한 Refresh 토큰 핸들링 로직 작성</li>
                <li>유저 정보, 모달 관리 등 전역 상태의 필요성에 따른 Redux 도입을 통한 전역 상태 관리 및 활용</li>
                <li>팀 프로젝트의 버그 방지 및 협업 효율의 증가를 위해 엄격한 Typescript, ESLint 규칙 설정</li>
                <li>
                  S3를 이용하여 정적 웹사이트를 호스팅 및 CloudFront와 Route53을 이용하여 커스텀 도메인 및 https
                  프로토콜을 추가
                </li>
                <li>
                  정적 서버의 지속적 배포를 위해 Github Actions를 통한 클라이언트 코드 AWS S3 자동 배포 Workflow 작성
                </li>
                <li>프로젝트 UI / UX 개선을 위해 Figma를 통한 디자이너와 적극 소통 및 협업</li>
                <li>스타일의 재사용성과 유지보수성을 위해 Styled-Component의 ThemeProvider로 공통 스타일 속성 관리</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>프로젝트 의의</th>
            <td>디자이너와 함께 협업한 프로젝트로 UI/UX에 보다 더 전문적으로 접근해볼 수 있었던 프로젝트</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default TeamProject;
