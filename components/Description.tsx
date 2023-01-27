import { css } from '@emotion/react';
import Button from '@/components/Button';
import Moon from '@/components/Moon';

type DescriptionProps = {};

const Description = ({}: DescriptionProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div>
        <h2>안녕하세요.</h2>
        <h2
          css={css`
            margin-top: 0;
          `}
        >
          프론트엔드 개발자 문성현입니다.
        </h2>
        <p>
          주로 타입스크립트와 리액트 기반의 클라이언트 개발을 하고 있습니다.
          <br />
          많은 사람들의 삶에 변화를 줄 수 있는 서비스를 만들고 싶습니다.
        </p>
        <div
          css={css`
            margin-top: 10px;
            display: flex;
            gap: 10px;
          `}
        >
          <Button>
            <a href='https://github.com/SunghyeonMoon'>Github</a>
          </Button>
          <Button>
            <a href='mailto:shine7329@gmail.com'>Contact</a>
          </Button>
        </div>
      </div>
      <Moon />
    </div>
  );
};

export default Description;
