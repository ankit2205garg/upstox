import {ItemInt} from '../utilities/commonInterface';

export const getTotalCumulativePrices = (list:ItemInt[]) => {
  let totalCurrentvalue:number = 0;
  let totalInvestmentvalue:number = 0;
  let totalClosevalue:number = 0;
  list?.forEach((item:ItemInt) => {
    totalCurrentvalue += +item?.ltp * +item?.quantity;
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
