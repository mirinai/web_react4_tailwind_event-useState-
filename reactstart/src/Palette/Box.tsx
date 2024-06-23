import { CSSProperties } from "react";

export type TBoxColor = {
  "50": "#E1F5FE";
  "100": "#B3E5FC";
  "200": "#81D4FA";
  "300": "#4FC3F7";
  "400": "#29B6F6";
  "500": "#03A9F4";
  "600": "#039BE5";
  "700": "#0288D1";
  "800": "#0277BD";
  "900": "#01579B";
};
type TBoxColorProps = {
  backgroundColor: TBoxColor[keyof TBoxColor];
  text: keyof TBoxColor;
};

const Box = ({ text, backgroundColor }: TBoxColorProps) => {
  const style: CSSProperties = {
    width: "200px",
    height: "50px",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundColor,
  };
  return <div style={style}>{text}</div>;
};

export default Box;
