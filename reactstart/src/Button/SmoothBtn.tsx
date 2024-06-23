import { CSSProperties } from "react";

const SmoothBtn = () => {
  const buttonStyle: CSSProperties = {
    fontSize: "32px",
    color: "white",
    backgroundColor: "#205BF3",
    padding: "10px 45px",
    borderRadius: "0px",
    border: "1px solid #205BF3",
  };
  return <button style={buttonStyle}>버튼임</button>;
};
export default SmoothBtn;
