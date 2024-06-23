import { CSSProperties } from "react";

const ActionButton = () => {
  const style: CSSProperties = {
    border: "none",
    color: "white",
    backgroundColor: "black",
    fontSize: "20px",
  };
  return <button style={style}>Action</button>;
};
export default ActionButton;
