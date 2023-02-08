import { css } from '@emotion/react';
import Image from 'next/image';

const Info = () => {
  return (
    <section>
      <div
        css={css`
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          @media (max-width: 900px) {
            flex-direction: column-reverse;
          }
        `}
      >
        <div>
          <h2
            css={css`
              margin-top: 0;
              line-height: 1.5;
            `}
          >
            안녕하세요. <br />
            프론트엔드 개발자 문성현입니다.
          </h2>
          <p
            css={css`
              line-height: 1.5;
            `}
          >
            다른 분야에서 느껴보지 못했던 몰입과 즐거움을 느껴 개발에 관심을 가지게 되었니다.
            <br />
            주로 타입스크립트와 리액트를 기반으로 한 클라이언트 개발을 하고 있습니다.
            <br />
            문제를 유연하게 해결할 수 있는 개발자가 되어,
            <br />
            많은 사람들의 삶에 변화를 줄 수 있는 서비스를 만들고 싶습니다.
          </p>
        </div>
        <div
          css={css`
            width: 320px;
            @media (max-width: 900px) {
              display: none;
            }
          `}
        >
          <Image
            src='/profile.jpg'
            alt='프로필'
            fill
            css={css`
              position: relative !important;
              border-radius: 5px;
            `}
          />
        </div>
      </div>
      <h2
        css={css`
          margin-bottom: 10px;
          text-align: left;
          font-size: 20px;
        `}
      >
        소개
      </h2>
      <table>
        <tbody>
          <tr>
            <th>이름</th>
            <td>문성현</td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>010-3543-7329</td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>shine7329@gmail.com</td>
          </tr>
          <tr>
            <th>깃허브</th>
            <td>
              <a href='https://github.com/SunghyeonMoon' target='_blank' rel='noreferrer'>
                https://github.com/SunghyeonMoon
              </a>
            </td>
          </tr>
          <tr>
            <th>블로그</th>
            <td>
              <a href='https://blog-sunghyeonmoon.vercel.app' target='_blank' rel='noreferrer'>
                https://blog-sunghyeonmoon.vercel.app
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Info;
