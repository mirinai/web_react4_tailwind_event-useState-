import { CSSProperties } from "react";
import { TBorderRadius, TColors, bgColorObj, borderRadiusObj } from "./style";
// type TColors = {
//   main: "#205BF3";
//   side: "#478DF5";
//   deactive: "#979797";
// };
// type TBorderRadius = {
//   hard: "0px";
//   smooth: "10px";
//   circle: "0px";
// };

type TBtnProps = {
  content: string;
  //   backgroundColor: "#205BF3" | "#478DF5" | "#979797";
  backgroundColor: keyof TColors;
  borderRadius: keyof TBorderRadius;
};

//input -> output
const Button = ({ content, backgroundColor, borderRadius }: TBtnProps) => {
  //   const bgColorObj: TColors = {
  //     main: "#205BF3",
  //     side: "#478DF5",
  //     deactive: "#979797",
  //   };
  //   const borderRadiusObj: TBorderRadius = {
  //     hard: "0px",
  //     smooth: "10px",
  //     circle: "0px",
  //   };
  //   const buttonContent = "버튼";
  const buttonStyle: CSSProperties = {
    fontSize: "20px",
    color: "white",
    // backgroundColor: backgroundColor,
    // backgroundColor,
    backgroundColor: bgColorObj[backgroundColor],
    padding: "10px 45px",
    border: `1px solid ${bgColorObj[backgroundColor]}`,
    // borderRadius: borderRadius,
    // borderRadius,
    borderRadius: borderRadiusObj[borderRadius],
  };
  return <button style={buttonStyle}>{content}</button>;
};
export default Button;
