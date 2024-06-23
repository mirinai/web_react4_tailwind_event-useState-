export type NickNameProps = {
  name: string;
};
// const NickName = ({ name = "noname" }: NickNameProps) => {
//   return <span className="font-extrabold text-white">{name}</span>;
// };
const NickName = ({ name = "noname" }: NickNameProps) => {
  return (
    <span
      style={{
        fontWeight: "800", // font-extrabold
        color: "#FFFFFF", // text-white
      }}
    >
      {name}
    </span>
  );
};
export default NickName;
