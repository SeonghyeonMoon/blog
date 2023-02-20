import { css } from '@emotion/react';
import TableTitle from '@/components/About/TableTitle';

const Ability = () => {
  return (
    <section
      css={css`
        margin-bottom: 20px;
      `}
    >
      <TableTitle>역량</TableTitle>
      <ul
        css={css`
          margin-left: 20px;
          list-style: disc;

          li {
            margin-bottom: 5px;
          }
        `}
      >
        <li>Next.js, React Query, Recoil 등 React 생태계의 다양한 기술을 사용하는 데 능숙합니다.</li>
        <li>
          컴포넌트 라이프 사이클과 렌더링 최적화에 대한 이해를 바탕으로 성능을 고려한 웹 페이지를 구현할 수 있습니다.
        </li>
        <li>
          상태 관리와 모델과 뷰 바인딩 방식에 대한 이해로 프레임워크에 의존하지 않고 웹 어플리케이션을 개발할 수
          있습니다.
        </li>
        <li>Webpack, Babel, Eslint 등을 직접 설정하여 상황에 맞는 개발 환경을 구성할 수 있습니다.</li>
        <li>Jest를 활용하여 클라이언트 테스트 코드 작성 경험이 있습니다.</li>
        <li>AWS, NCP 등 클라우드 서비스를 통한 배포 경험이 있으며, Github Action을 통해 CI/CD를 구축할 수 있습니다.</li>
        <li>Node 기반의 서버 개발 경험으로 전체적인 웹 개발 프로세스를 이해하고 있습니다.</li>
        <li>Git과 Github을 활용하여 원활한 협업을 위한 환경 구성을 할 수 있습니다.</li>
        <li>자바스크립트의 최신 문법에 익숙하며, 함수형 프로그래밍을 지향합니다.</li>
        <li>UI/UX와 디자인 시스템에 대한 관심을 가지고 있으며, Figma를 통해 디자이너와 원활한 협업이 가능합니다.</li>
        <li>꾸준한 CS, 알고리즘 학습으로 지속적으로 기초 역량을 기르고 있습니다.</li>
      </ul>
    </section>
  );
};

export default Ability;
