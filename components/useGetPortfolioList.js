import React from "react";
import { Network } from "../utilities/Network";

export const useGetPortfolioList = () => {
  const [listData, setListdata] = React.useState();

  const apiCallFun = async () => {
    const res = await Network.getPortfolioList();
    if (res?.data) {
     
      setListdata(res.data.userHolding);
    } else{
      setListdata({error:'Some Error Occurred'});
    }
  };

  React.useEffect(() => {
    apiCallFun();
  }, []);
  return listData;
};
