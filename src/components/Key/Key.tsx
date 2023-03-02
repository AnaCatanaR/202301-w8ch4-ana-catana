import KeyStyled from "./KeyStyled";

interface KeyProps {
  className: string;
  content: string;
}

const Key = ({ className, content }: KeyProps): JSX.Element => {
  return <KeyStyled className={className}>{content}</KeyStyled>;
};

export default Key;
