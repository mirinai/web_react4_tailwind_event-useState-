import { CSSProperties } from "react";
import StatusIcon, { TStatusIconProps } from "./StatusIcon";
import { IoIosInformationCircle } from "react-icons/io";
import MessageText, { TMessageTextProps } from "./MessageText";
import ActionButton from "./ActionButton";
type TSnackbarProps = {
  statusIcon: TStatusIconProps;
  messageText: TMessageTextProps;
};
const Snackbar = ({ statusIcon, messageText }: TSnackbarProps) => {
  const style: CSSProperties = {
    width: "240px",

    backgroundColor: "black",
    padding: "12px",
    borderRadius: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <StatusIcon {...statusIcon} />
        <MessageText {...messageText} />
        {/* <StatusIcon color={statusIcon.color} Icon={statusIcon.Icon} />
        <MessageText message={messageText.message} /> */}
      </div>
      <ActionButton />
    </div>
  );
};
export default Snackbar;
