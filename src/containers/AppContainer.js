import Index from './../pages/index';
import {Container as AppContainer} from 'flux/utils';
import OrdersStore from '../data/OrdersStore';
import TakeawayStore from '../data/TakeawayStore';

function getStores() {
  return [
    OrdersStore,
    TakeawayStore
  ];
}

function getState() {
  return {
    orders: OrdersStore.getState(),
    takeaway: TakeawayStore.getState()
  };
}

export default AppContainer.createFunctional(Index, getStores, getState);