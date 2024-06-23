import SNSIcon, { TSNSIconProps } from "./SNSIcon";
import SNSText, { TSNSTextProps } from "./SNSText";
import { CSSProperties } from "react";
type TSNSLoginProps = {
  backgroundColor: "blue" | "black" | "grey";
  snsIcon: TSNSIconProps;
  snsText: TSNSTextProps;
};

const SNSLogin = ({ backgroundColor, snsIcon, snsText }: TSNSLoginProps) => {
  const style: CSSProperties = {
    padding: "15px",
    display: "flex",
    gap: "15px",
    backgroundColor,
    border: `1px solid ${backgroundColor}`,
    borderRadius: "10px",
    width: "fit-content",
    color: "white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  return (
    <div style={style}>
      <SNSIcon {...snsIcon} />
      <SNSText {...snsText} />
    </div>
  );
};

export default SNSLogin;
