import { CSSProperties } from "react";
import { IconType } from "react-icons";
// import { IoIosInformationCircle } from "react-icons/io";

type TStatus = {
  info: "#27437C";
  check: "#284D30";
  warning: "#7A2A32";
};

export type TStatusIconProps = {
  color: keyof TStatus;
  Icon: IconType;
};

const StatusIcon = ({ color, Icon }: TStatusIconProps) => {
  const statusObj: TStatus = {
    info: "#27437C",
    check: "#284D30",
    warning: "#7A2A32",
  };

  const style: CSSProperties = {
    // backgroundColor: "#27437C",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    color: statusObj[color],
    border: "50%",
    fontSize: "20px",
  };

  return (
    <span style={style}>
      <Icon />
      {/* <IoIosInformationCircle /> */}
    </span>
  );
};
export default StatusIcon;
