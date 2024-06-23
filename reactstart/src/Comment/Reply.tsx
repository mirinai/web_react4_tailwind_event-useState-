export type ReplyProps = {
  reply: string;
};

// const Reply = ({ reply = "No comment" }: ReplyProps) => {
//   return <span className="break-words font-normal text-gray-300">{reply}</span>;
// };
const Reply = ({ reply = "No comment" }: ReplyProps) => {
  return (
    <span
      style={{
        wordBreak: "break-word", // break-words
        fontWeight: "normal", // font-normal
        color: "#D1D5DB", // text-gray-300
      }}
    >
      {reply}
    </span>
  );
};
export default Reply;
