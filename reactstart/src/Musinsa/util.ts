const nationsCurreny = {
  korea: "원",
  japan: "엔",
  china: "위안",
};

export const changeToCurrency = (
  str: string,
  nation: "korea" | "japan" | "china"
) => Number(str).toLocaleString() + nationsCurreny[nation];
