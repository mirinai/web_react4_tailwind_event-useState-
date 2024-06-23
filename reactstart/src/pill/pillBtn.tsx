import { TPointColors, TBarBorder, TBarBorderRadius } from "./Lan_style";

import { CSSProperties } from "react";

type TBtnProps = {
  content: keyof TPointColors;
  pointColor: TPointColors[keyof TPointColors];
};
const Button = ({ content, pointColor }: TBtnProps) => {};
