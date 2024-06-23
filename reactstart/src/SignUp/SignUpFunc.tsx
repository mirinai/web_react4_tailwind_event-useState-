// import { ChangeEvent, useState } from "react";
// import SignUp from "./SignUp";

// export const SignUpFunc = () => {
//   const [signUp, setSignUp] = useState({ id: "", pw: "", pwch: "" });

//   const handleId = (e: ChangeEvent<HTMLInputElement>) => {
//     setSignUp((v) => ({ ...v, id: e.target.value }));
//   };
//   const handlePw = (e: ChangeEvent<HTMLInputElement>) => {
//     setSignUp((v) => ({ ...v, pw: e.target.value }));
//   };
//   const handlePwch = (e: ChangeEvent<HTMLInputElement>) => {
//     setSignUp((v) => ({ ...v, pwch: e.target.value }));
//   };

//   const isAllLength =
//     !!signUp.id.length && !!signUp.pw.length && !!signUp.pwch.length;
//   const isAllPassed = signUp.id.includes("@") && signUp.pw === signUp.pwch;
//   return {
//     handleId,
//     handlePw,
//     handlePwch,
//     isAllLength,
//     isAllPassed,
//   };
// };
// export default SignUpFunc;
export {};
