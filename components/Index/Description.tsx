import { css } from '@emotion/react';
import Button from '@/components/Button';
import Moon from '@/components/Index/Moon';

const Description = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 900px) {
          flex-direction: column-reverse;
          margin-bottom: 20px;
        }
      `}
    >
      <div
        css={css`
          @media (max-width: 900px) {
          align-self: flex-start;
        `}
      >
        <h2>안녕하세요.</h2>
        <h2
          css={css`
            margin-top: 0;
          `}
        >
          프론트엔드 개발자 문성현입니다.
        </h2>
        <p>
          학습하면서 느낀 점과 공부한 내용을 기록하고 공유하는 공간입니다.
          <br />
          다른 분들께도 도움이 되었으면 좋겠습니다.
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
