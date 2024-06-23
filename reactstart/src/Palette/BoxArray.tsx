import React from "react";
import Box, { TBoxColor } from "./Box";

const colors: TBoxColor = {
  "50": "#E1F5FE",
  "100": "#B3E5FC",
  "200": "#81D4FA",
  "300": "#4FC3F7",
  "400": "#29B6F6",
  "500": "#03A9F4",
  "600": "#039BE5",
  "700": "#0288D1",
  "800": "#0277BD",
  "900": "#01579B",
};

// const ObjToStr: React.FC = () => {
//   return (
//     <>
//       {Object.keys(colors).map((key) => (
//         <Box
//           key={key}
//           backgroundColor={colors[key as keyof TBoxColor]}
//           text={key as keyof TBoxColor}
//         />
//       ))}
//     </>
//   );
// };

// export default ObjToStr;
// type ObjToStrProps = {};

// const ObjToStr = (props: ObjToStrProps) => {
//   return (
//     <>
//       {Object.keys(colors).map((key) => (
//         <Box
//           key={key}
//           backgroundColor={colors[key as keyof TBoxColor]}
//           text={key as keyof TBoxColor}
//         />
//       ))}
//     </>
//   );
// };

// export default ObjToStr;
const ObjToStr = () => {
  return (
    <>
      {Object.keys(colors).map((key) => (
        <Box
          key={key}
          backgroundColor={colors[key as keyof TBoxColor]}
          text={key as keyof TBoxColor}
        />
      ))}
    </>
  );
};

export default ObjToStr;
