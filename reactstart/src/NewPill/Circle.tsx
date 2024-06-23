import { CSSProperties } from "react";

//차이점은 Props로
type TCircleProps = {
  backgroundColor: string;
};

const Circle = ({ backgroundColor }: TCircleProps) => {
  const style: CSSProperties = {
    width: "16px",
    height: "16px",
    backgroundColor: backgroundColor,
    borderRadius: "50%",
  };
  return <div style={style}></div>;
};
export default Circle;
