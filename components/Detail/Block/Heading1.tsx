import { css } from '@emotion/react';
import Text from '@/components/Detail/Block/Text';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

type Heading1Props = {
  id: string;
  text: RichTextItemResponse[];
};

const Heading1 = ({ id, text }: Heading1Props) => {
  return (
    <>
      <h1
        id={id}
        css={css`
          margin-top: 32px;
          margin-bottom: 16px;
          scroll-margin: 10vh;
        `}
      >
        <Text textList={text} />
      </h1>
      <hr />
    </>
  );
};

export default Heading1;
