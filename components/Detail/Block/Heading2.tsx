import { css } from '@emotion/react';
import Text from '@/components/Detail/Block/Text';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

type Heading2Props = {
  id: string;
  text: RichTextItemResponse[];
};

const Heading2 = ({ id, text }: Heading2Props) => {
  return (
    <>
      <h2
        id={id}
        css={css`
          margin-top: 24px;
          scroll-margin: 10vh;
        `}
      >
        <Text textList={text} />
      </h2>
      <hr />
    </>
  );
};

export default Heading2;
