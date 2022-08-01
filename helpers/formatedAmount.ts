export const formatedAmount = (value: string | number, currency = "USD") => {
  const formatedAmount = new Intl.NumberFormat("us-Us", {
    style: "currency",
    currency: currency,
  });
  return formatedAmount.format(Number(value));
};
