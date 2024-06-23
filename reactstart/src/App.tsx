import React, { ChangeEvent, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";

import { CSSProperties } from "react";
import Circle from "./NewPill/Circle";
import CircleWidthX from "./NewPill/CircleWidthX";
import Pill from "./NewPill/Pill";

import Palette from "./Palette/Palette";
import Box, { TBoxColor } from "./Palette/Box";
import ItemImage from "./Musinsa/ItemImage";
import ObjToStr from "./Palette/BoxArray";
import Palettes from "./Palette/Palettes";
import Item from "./Musinsa/Item";
import ProfileImage from "./Comment/ProfileImage";
import Comment from "./Comment/Comment";
import Mybutton from "./SignUp/Mybutton";
import SignUp from "./SignUp/SignUp";
import InputForm from "./SignUp/InputForm";
import FormButton from "./SignUp/FormButton";
import { FaHandMiddleFinger } from "react-icons/fa";
import SignUpFunc from "./SignUp/SignUp";

// import HardBtn from "./HardBtn";
// import { CiCircleCheck } from "react-icons/ci";
// import { CiCircleInfo } from "react-icons/ci";
// import { IoWarningOutline } from "react-icons/io5";
// // import { TiWarningOutline } from "react-icons/ci";
// import { FaBeer } from "react-icons/fa";

// import Button from "./Button/Button";
// import Snackbar from "./Button/snackbar";
// import StatusIcon from "./Button/StatusIcon";
// // import LargeButton from "./LargeButton";
// // import LunchButton from "./LunchButton";
// import { IoIosInformationCircle } from "react-icons/io";

// // import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
// // import { IoIosInformationCircle } from "react-icons/io";
// // import { IoWarningOutline } from "react-icons/io5";

// // import { FaFacebook, FaApple } from "react-icons/fa";
// // import { FcGoogle } from "react-icons/fc";
// import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
// import SNSIcon from "./SNS/SNSIcon";
// import SNSText from "./SNS/SNSIcon";
// import SNSLogin from "./SNS/SNSLogin";

function App() {
  // return (
  {
    /* <LunchButton />
      <LunchButton />
      <LunchButton></LunchButton>
      <LunchButton></LunchButton>
      <LunchButton></LunchButton>
      <LargeButton />
      <LargeButton />
      <LargeButton></LargeButton>
      <LargeButton></LargeButton> */
  }
  {
    /* <HardBtn content="Home" />
      <HardBtn content="Q&A" />
      <HardBtn content="About" /> */
  }
  {
    /* */
  }
  {
    /* <div>
        <Button content="Home" backgroundColor="main" borderRadius="hard" />
        <Button content="Home" backgroundColor="side" borderRadius="smooth" />
        <Button
          content="Home"
          backgroundColor="deactive"
          borderRadius="circle"
        />
      </div> */
  }
  {
    /* <div>
        {/* <FaBeer />
        <Snackbar content="Message" icon="icon1" />
        <Snackbar content="Message" icon="icon2" />
        <Snackbar content="Message" icon="icon3" /> */
  }
  {
    /* <StatusIcon color="check" Icon={IoIosInformationCircle} />
        <StatusIcon color="warning" Icon={IoWarningOutline} /> */
  }
  {
    /* <Snackbar
        statusIcon={{ color: "check", Icon: CiCircleCheck }}
        messageText={{ message: "Message" }}
      />
      <Snackbar
        statusIcon={{ color: "info", Icon: CiCircleInfo }}
        messageText={{ message: "Message" }}
      />
      <Snackbar
        statusIcon={{ color: "warning", Icon: IoWarningOutline }}
        messageText={{ message: "Message" }}
      /> */
  }
  {
    /* </div> */
  }
  {
    /* <div>
        <SNSLogin
          backgroundColor="blue"
          snsText={{ sns: "Facebook" }}
          snsIcon={{ Icon: FaFacebook }}
        />
        <SNSLogin
          backgroundColor="black"
          snsText={{ sns: "Apple" }}
          snsIcon={{ Icon: FaApple }}
        />
        <SNSLogin
          backgroundColor="grey"
          snsText={{ sns: "Google" }}
          snsIcon={{ Icon: FaGoogle }}
        />
      </div> */
  }
  const [signUp, setSignUp] = useState({ id: "", pw: "", pwch: "" });

  const isAllLength =
    !!signUp.id.length && !!signUp.pw.length && !!signUp.pwch.length;
  const isAllPassed = signUp.id.includes("@") && signUp.pw === signUp.pwch;

  const handleId = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUp((v) => ({ ...v, id: e.target.value }));
  };

  const handlePw = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUp((v) => ({ ...v, pw: e.target.value }));
  };

  const handlePwch = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUp((v) => ({ ...v, pwch: e.target.value }));
  };
  return (
    <>
      <div>
        <SignUpFunc onChange={handleId} guide="아이디" />
        <SignUpFunc onChange={handlePw} guide="비밀번호" />
        <SignUpFunc onChange={handlePwch} guide="비밀번호 확인" />
        <FormButton isPass={isAllLength && isAllPassed} />
      </div>
      <div>
        <InputForm />
      </div>
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-thin underline">Hello, Tailwind CSS!</h1>
        <div className="text-red-400">100</div>
      </div>
      <div>
        <Mybutton />
      </div>
      <div>
        <Comment />
        <div className="text-sky-600 text-lg">hello</div>
        <ProfileImage />
      </div>
      <div>
        <Pill text="XML" backgroundColor="red" />
        <Pill text="Javascript" backgroundColor="yellow" />
        <Pill text="UI" backgroundColor="blue" />
      </div>

      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <Palette />
      </div> */}

      <div>
        <ObjToStr />
        <Palettes />
      </div>
      <div>
        <div className="w-6 h-6 rounded-full border border-gray-200 overflow-hidden">
          <img className="w-full h-full object-cover" src="food.png" alt="" />
        </div>
        <Item
          itemImage={{ imageSrc: "shoes1.jpg" }}
          itemInfo={{ itemName: "탠디" }}
          itemPrice={{ price: "112000", discount: "33" }}
        />
      </div>
    </>
  );
  // );
  //Object.keys(colors)는 colors 객체의 모든 키를 문자열 배열로 반환합니다.기본적으로 이 반환 값의 타입은 string[]입니다.
  //타입 단언 (as (keyof TBoxColor)[]):
  //Object.keys(colors)의 반환 값을 keyof TBoxColor 타입의 배열로 단언합니다.
  //이는 타입스크립트에게 이 배열의 각 요소가 TBoxColor 타입의 키 중 하나임을 보장하는 역할을 합니다.
  //.map((key) => ...):Object.keys(colors)로 얻은 키 배열을 순회하면서 각 키에 대해 Box 컴포넌트를 생성합니다.
  //여기서 key의 타입은 keyof TBoxColor입니다.
  //타입 단언 (colors[key as keyof TBoxColor]):
  //colors[key]의 값을 가져올 때, key를 keyof TBoxColor로 단언하여 타입스크립트가 colors 객체에서 올바른 값을 가져오도록 합니다.
}
export default App;
