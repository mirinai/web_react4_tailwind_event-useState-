import { ChangeEvent, useState } from "react";

const InputForm = () => {
  const [textLen, setTextLen] = useState(0);
  //   const [limitLen, setLimitLen] = useState(false);
  const [value, setValue] = useState("넣기");
  const [len, setLen] = useState(15);
  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTextLen((v) => e.target.value.length);
    if (e.target.value.length < len) {
      setTextLen(() => e.target.value.length);
      setValue(() => e.target.value);
    }
    //     setTextLen((v) => {
    //       if (v >= 15) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     });
    //   };

    //   const inputNum = (handle: ChangeEvent) => {
    //     setNum((v) => v + 1);
    //     console.log(num);
    //   };
    //   <textArea name="" id=""></textArea>;
  };
  const increase = () => setLen((v) => v + 1);
  return (
    <div style={{ border: "1px solid #cbd5e1", width: "fit-content" }}>
      <input
        style={{ border: "1px solid #d1d5db", padding: "0.5rem" }}
        value={value}
        onChange={handle}
        type="text"
      />
      <span className="">{textLen}</span>
      <span>/{len}</span>
      <button onClick={increase} className="border border-red-400 p-1">
        +
      </button>
    </div>
  );
};
export default InputForm;
