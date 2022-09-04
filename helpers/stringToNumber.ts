export const stringToNumber = (value: string | number) => {
  return typeof value === "string" ? Number(value.slice(1)) : Number(value);
};
