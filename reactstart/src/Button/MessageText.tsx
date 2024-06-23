import { CSSProperties } from "react";

export type TMessageTextProps = {
  message: string;
};

const MessageText = ({ message }: TMessageTextProps) => {
  const style: CSSProperties = {
    color: "white",
  };
  return <div style={style}>{message}</div>;
};
export default MessageText;
