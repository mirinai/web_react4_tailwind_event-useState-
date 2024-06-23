import { commentTimeStamp } from "../util";

// const CommentDate = () => {
//   return (
//     <span className="font-normal text-gray-400">{commentTimeStamp()}</span>
//   );
// };
const CommentDate = () => {
  return (
    <span
      style={{
        fontWeight: "normal", // font-normal
        color: "#9CA3AF", // text-gray-400
      }}
    >
      {commentTimeStamp()}
    </span>
  );
};
export default CommentDate;
