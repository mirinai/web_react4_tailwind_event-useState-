import { CSSProperties, useState } from "react";
import { commentTimeStamp } from "../util";

const Mybutton = () => {
  const style1: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const specialStyle: CSSProperties = {
    color: "red",
  };
  //컴포넌트에서 상태(state) 바뀜
  // react ver- 19
  // react ver
  //   const time = commentTimeStamp;
  const [num, setNum] = useState(0); // num은 변수, setNum은 함수로 만들기
  const [isTen, setIsTen] = useState(false);
  const handleMinus = () => {
    // setNum((v) => (v === -10 ? -10 : v - 1)); //함수
    setNum((v) => (v === 0 ? 0 : v - 1));
    setIsTen((v) => false);
  };
  //10이면 숫자가 빨간색이 되게하기
  const handlePlus = () => {
    // setNum((v) => (v === 10 ? 10 : v + 1)); //함수
    // num === 10 ? setIsTen((v) => true) : setIsTen((v) => false);
    setNum((v) => {
      if (v === 10) {
        return 10;
      } else {
        v === 9 ? setIsTen((prev) => true) : setIsTen((prev) => false);
        return v + 1;
      }
    });
  };
  //   const std = () => {
  //     setColor((v) => ());
  //   };
  return (
    <div style={style1}>
      <div>
        <button onClick={handleMinus}>-</button>
      </div>

      <div className={isTen ? "text-red-500" : "text-sky-500"}>{num}</div>
      <div>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
};
export default Mybutton;
