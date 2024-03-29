import { css } from '@emotion/react';
import { FaGithub, FaPaperPlane } from 'react-icons/fa';
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
          margin-bottom: 10px;
        }
      `}
    >
      <div>
        <h2>안녕하세요.</h2>
        <h2>프론트엔드 개발자 문성현입니다.</h2>
        <p>학습하면서 느낀 점과 공부한 내용을 기록하고 공유하는 공간입니다.</p>
        <div
          css={css`
            margin-top: 10px;
            margin-left: 5px;
            display: flex;
            gap: 10px;
            align-items: center;
          `}
        >
          <a href='https://github.com/SunghyeonMoon'>
            <FaGithub
              css={css`
                width: 25px;
                height: 25px;
                transition: filter 0.25s linear;
                &:hover {
                  filter: brightness(0.8);
                }
              `}
            />
          </a>
          <a href='mailto:shine7329@gmail.com'>
            <FaPaperPlane
              css={css`
                width: 20px;
                height: 20px;
                transition: filter 0.25s linear;
                &:hover {
                  filter: brightness(0.8);
                }
              `}
            />
          </a>
        </div>
      </div>
      <Moon />
    </div>
  );
};

export default Description;
