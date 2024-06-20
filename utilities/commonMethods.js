export const getTotalCumulativePrices = (list) => {
  let totalCurrentvalue = 0;
  let totalInvestmentvalue = 0;
  let totalClosevalue = 0;
  list?.forEach((item) => {
    totalCurrentvalue += item?.ltp * item?.quantity;
    totalInvestmentvalue += item?.avgPrice * item?.quantity;
    totalClosevalue += item?.close * item?.quantity;
    return item;
  });
  return {
    totalCurrentvalue,
    totalInvestmentvalue,
    totalClosevalue,
  };
};
