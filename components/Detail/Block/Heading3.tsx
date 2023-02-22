import { css } from '@emotion/react';
import Text from '@/components/Detail/Block/Text';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

type Heading3Props = {
  id: string;
  text: RichTextItemResponse[];
};

const Heading3 = ({ id, text }: Heading3Props) => {
  return (
    <>
      <h3
        id={id}
        css={css`
          margin-top: 16px;
          margin-bottom: 16px;
          scroll-margin: 10vh;
        `}
      >
        <Text textList={text} />
      </h3>
      <hr />
    </>
  );
};

export default Heading3;
