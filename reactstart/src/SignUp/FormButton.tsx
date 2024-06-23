type FormButtonProps = {
  isPass: boolean;
};

const FormButton = ({ isPass }: FormButtonProps) => {
  const buttonStyle = isPass
    ? {
        border: "1px solid #7dd3fc", // border-sky-300
        backgroundColor: "#7dd3fc", // bg-sky-300
        borderRadius: "0.375rem", // rounded-md
        padding: "0.5rem", // p-2
      }
    : {
        border: "1px solid #fca5a5", // border-red-300
        backgroundColor: "#fca5a5", // bg-red-300
        borderRadius: "0.375rem", // rounded-md
        padding: "0.5rem", // p-2
      };
  return (
    <button style={buttonStyle}>{isPass ? "등록 완료" : "등록 불가"}</button>
  );
};

export default FormButton;
