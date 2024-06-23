export const commentTimeStamp = () => {
  const date = new Date().toLocaleDateString();
  const [_, time] = new Date().toLocaleTimeString().split(" ");
  return date + time;
};
