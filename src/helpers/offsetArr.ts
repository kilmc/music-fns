export const offsetArr = <Type>(arr: Type[], amount: number) => {
  return [...arr.slice(amount), ...arr.slice(0, amount)];
};
