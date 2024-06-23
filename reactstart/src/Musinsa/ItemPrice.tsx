import { CSSProperties } from "react";
import { changeToCurrency } from "./util";

export type ItemPriceProps = {
  //   hasDiscount: boolean;
  discount?: string;
  price: string;
};

const ItemPrice = ({ price, discount }: ItemPriceProps) => {
  const discountStyle: CSSProperties = {
    color: "red",
    marginRight: "5px",
  };
  //   const hasDiscount = true;

  return (
    <div>
      {!!discount && <span style={discountStyle}>{discount}%</span>}
      <span>{changeToCurrency(price, "korea")}</span>
    </div>
  );
};
export default ItemPrice;
