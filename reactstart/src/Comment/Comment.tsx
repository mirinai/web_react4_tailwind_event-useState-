import CommentDate from "./CommentDate";
import NickName from "./Nickname";
import ProfileImage from "./ProfileImage";
import Reply from "./Reply";

// const Comment = () => {
//   return (
//     <div className="bg-slate-700 w-80 h-20 flex gap-3 p-3">
//       <div className="flex-none">
//         <ProfileImage />
//       </div>

//       <div className="w-full flex-col flex-initial">
//         <div className="w-full flex-none flex justify-between">
//           <NickName name="noName" />
//           <CommentDate />
//         </div>
//         <div className="flex-1">
//           <Reply reply="no reply" />
//         </div>
//       </div>
//     </div>
//   );
// };
const Comment = () => {
  return (
    <div
      style={{
        backgroundColor: "#334155", // bg-slate-700
        width: "20rem", // w-80
        height: "5rem", // h-20
        display: "flex", // flex
        gap: "0.75rem", // gap-3
        padding: "0.75rem", // p-3
      }}
    >
      <div style={{ flex: "none" }}>
        <ProfileImage />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flex: "initial",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flex: "none",
          }}
        >
          <NickName name="noName" />
          <CommentDate />
        </div>
        <div style={{ flex: "1" }}>
          <Reply reply="no reply" />
        </div>
      </div>
    </div>
  );
};
export default Comment;
