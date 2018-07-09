import OrdersActionTypes from './OrdersActionTypes';
import Dispatcher from './../Dispatcher';
import OrdersStore from './OrdersStore';

const OrdersActions = {
  addOrder(order) {
    Dispatcher.dispatch({
      type: OrdersActionTypes.ADD_ORDER,
      order
    });
  }
};

export default OrdersActions;
window.oa = OrdersActions // TODO VICMAR REMOVE
window.oas = OrdersStore // TODO VICMAR REMOVE