import Palette from "./Palette";

const Palettes = () => {
  const arr = [
    { backgroundColor: "#E1F5FE", text: "50" },
    { backgroundColor: "#B3E5FC", text: "100" },
    { backgroundColor: "#81D4FA", text: "150" },
    { backgroundColor: "#4FC3F7", text: "200" },
    { backgroundColor: "#29B6F6", text: "250" },
    { backgroundColor: "#03A9F4", text: "300" },
    { backgroundColor: "#03A9F4", text: "350" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {arr.map((v) => (
        <Palette {...v} />
      ))}
    </div>
  );
};
export default Palettes;
