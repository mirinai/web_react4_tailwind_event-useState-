// import { CSSProperties } from "react";
// import { IconType } from "react-icons";

// type TBgStatus = {
//   facebook: "blue";
//   google: "white";
//   apple: "black";
// };
// type TColorStatus = {
//   facebook: "white";
//   google: "grey";
//   apple: "white";
// };
// export type TBrandStatusProps = {
//   backgroudColor: keyof TBgStatus;
//   color: keyof TColorStatus;
//   Icon: IconType;
// };
// const BrandStatus = ({
//   backgroudColor,
//   color,
//   Icon,
// }: TBrandStatusProps) => {
//   const colorStatusObj:TColorStatus={
//     facebook: "white",
//     google: "grey",
//     apple: "white",
//   }
//   const bgStatusObj:TBgStatus={
//     facebook: "blue",
//   google: "white",
//   apple: "black",
//   }
//   const style:CSSProperties={
//     width:"400px",
//     display:"flex",
//     justifyContent: "center",
//     alignItems: "center",

//   }

//   return ();
// };
// export default BrandStatus;
// import { IconType } from "react-icons";

import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
type TIconTypeLimited = typeof FaFacebook | typeof FaGoogle | typeof FaApple;

export type TSNSIconProps = {
  Icon: TIconTypeLimited;
};
const SNSIcon = ({ Icon }: TSNSIconProps) => {
  return (
    <span>
      <Icon />
    </span>
  );
};
export default SNSIcon;
