type AProps = {
  href: string;
};

const NewTabLink = ({ href }: AProps) => {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
      {href}
    </a>
  );
};

export default NewTabLink;
