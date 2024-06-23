export type TSNSTextProps = {
  sns: "Facebook" | "Google" | "Apple";
};

const SNSText = ({ sns }: TSNSTextProps) => {
  return <span>start with {sns}</span>;
};

export default SNSText;
