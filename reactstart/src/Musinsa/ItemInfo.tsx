export type ItemInfoProps = {
  itemName: string;
};

const ItemInfo = ({ itemName }: ItemInfoProps) => {
  return (
    <div>
      <span>{itemName}</span>
    </div>
  );
};
export default ItemInfo;
