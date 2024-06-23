import { CSSProperties } from "react";
import CircleWidthX from "./CircleWidthX";
import Circle from "./Circle";
type TPillprops = {
  text: string;
  backgroundColor: string;
};
const Pill = ({ text, backgroundColor }: TPillprops) => {
  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #DBDBDB",
    borderRadius: "30px",
    gap: "6px",
    padding: "5px",
    width: "fit-content",
  };
  return (
    <div className="App">
      <div style={style}>
        <Circle backgroundColor={backgroundColor} />
        <span style={{ lineHeight: "5px" }}>{text}</span>
        <CircleWidthX />
      </div>
    </div>
  );
};
export default Pill;
