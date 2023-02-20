import { css } from '@emotion/react';
import NewTabLink from '@/components/About/NewTabLink';
import TableTitle from '@/components/About/TableTitle';

const Info = () => {
  return (
    <section
      css={css`
        margin-top: 20px;
      `}
    >
      <TableTitle>소개</TableTitle>
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
              <NewTabLink href='https://github.com/SunghyeonMoon' />
            </td>
          </tr>
          <tr>
            <th>블로그</th>
            <td>
              <NewTabLink href='https://blog-sunghyeonmoon.vercel.app' />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Info;
