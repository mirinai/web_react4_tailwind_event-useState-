export type ProfileImageProps = {
  imgSrc?: string;
};

// const ProfileImage = ({ imgSrc = "default.webp" }: ProfileImageProps) => {
//   return (
//     <div className="w-4 h-4 border-gray-400 rounded-full overflow-hidden">
//       <img className="w-full h-full object-cover" src={imgSrc} alt="" />
//     </div>
//   );
// };
const ProfileImage = ({ imgSrc = "default.webp" }: ProfileImageProps) => {
  return (
    <div
      style={{
        width: "1rem", // w-4
        height: "1rem", // h-4
        border: "1px solid #9CA3AF", // border-gray-400
        borderRadius: "50%", // rounded-full
        overflow: "hidden", // overflow-hidden
      }}
    >
      <img
        style={{
          width: "100%", // w-full
          height: "100%", // h-full
          objectFit: "cover", // object-cover
        }}
        src={imgSrc}
        alt=""
      />
    </div>
  );
};
export default ProfileImage;
