import { css } from '@emotion/react';
import Image from 'next/image';

type ProjectImageProps = {
  url: string;
  description: string;
};

const ProjectImage = ({ url, description }: ProjectImageProps) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Image
        src={url}
        alt={description}
        fill
        css={css`
          position: relative !important;
        `}
      />
      <p
        css={css`
          text-align: center;
        `}
      >
        {description}
      </p>
    </div>
  );
};

export default ProjectImage;
