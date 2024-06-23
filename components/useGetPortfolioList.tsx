import React from "react";
import { Network } from "../utilities/Network";
import {ListItemInterface} from '../utilities/commonInterface';



interface ItemListInterface{
  listData: ListItemInterface[];
  error:string;
}
export const useGetPortfolioList = () => {
  const [listData, setListdata] = React.useState<ItemListInterface>();

  const apiCallFun = async () => {
    const res = await Network.getPortfolioList();
    if (res?.data?.userHolding) {
     
      setListdata({listData:res.data.userHolding, error:''});
    } else{
       setListdata({listData:[],error:'Some Error Occurred'});
      //setListdata({error:'Some Error Occurred'});
    }
  };

  React.useEffect(() => {
    apiCallFun();
  }, []);
  return listData;
};
