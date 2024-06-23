// import { CSSProperties, ChangeEvent, useState } from "react";

// type InputFormProps = {
//   guide?: string;
//   placeholder?: string; // placehoder -> placeholder
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// };

// const SignUp = ({
//   guide = "None",
//   placeholder = "", // placehoder -> placeholder
//   onChange,
// }: InputFormProps) => {
//   return (
//     <div className=" p-4 border border-slate-300 rounded-md bg-white flex items-center space-x-2">
//       <h4 className="text-lg w-fit text-slate-500">{guide}</h4>
//       <input
//         placeholder={placeholder}
//         onChange={onChange}
//         type="text"
//         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
//       />
//     </div>
//   );
// };

// export default SignUp;
import { CSSProperties, ChangeEvent, useState } from "react";

type InputFormProps = {
  guide?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SignUp = ({
  guide = "None",
  placeholder = "",
  onChange,
}: InputFormProps) => {
  return (
    <div
      style={{
        padding: "1rem", // p-4
        border: "1px solid #cbd5e1", // border-slate-300
        borderRadius: "0.375rem", // rounded-md
        backgroundColor: "white", // bg-white
        display: "flex", // flex
        alignItems: "center", // items-center
        gap: "0.5rem", // space-x-2
      }}
    >
      <h4
        style={{
          fontSize: "1.125rem", // text-lg
          width: "fit-content", // w-fit
          color: "#64748b", // text-slate-500
        }}
      >
        {guide}
      </h4>
      <input
        placeholder={placeholder}
        onChange={onChange}
        type="text"
        style={{
          width: "100%", // w-full
          padding: "0.5rem", // p-2
          border: "1px solid #d1d5db", // border-gray-300
          borderRadius: "0.375rem", // rounded-md
          outline: "none", // focus:outline-none
        }}
      />
    </div>
  );
};

export default SignUp;
