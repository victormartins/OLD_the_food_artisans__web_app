import AppView from './../pages/AppView';
import {Container as AppContainer} from 'flux/utils';
import OrdersStore from '../data/OrdersStore';
import TakeawayStore from '../data/TakeawayStore';
import OrdersActions from '../data/OrdersActions';
import TakeawayActions from '../data/TakeawayActions';

function getStores() {
  return [
    OrdersStore,
    TakeawayStore
  ];
}

function getState() {
  return {
    orders: OrdersStore.getState(),
    takeaway: TakeawayStore.getState(),

    onGetDailyMenus: TakeawayActions.getDailyMenus
  };
}

export default AppContainer.createFunctional(AppView, getStores, getState);