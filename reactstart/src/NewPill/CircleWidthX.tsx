import { CSSProperties } from "react";

//차이점은 Props로
type TCircleWidthXProps = {};

const CircleWidthX = ({}: TCircleWidthXProps) => {
  const style: CSSProperties = {
    width: "16px",
    height: "16px",
    backgroundColor: "grey",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    cursor: "pointer",
  };
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  );
};
export default CircleWidthX;
