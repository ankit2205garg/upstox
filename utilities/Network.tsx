import {GET} from './networkFetch';

const Api_GET_LIST = 'https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/';

export const Network = {
  getPortfolioList: () => GET(`${Api_GET_LIST}`),
}