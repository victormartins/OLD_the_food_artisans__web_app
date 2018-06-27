import OrdersActionTypes from './OrdersActionTypes';
import Dispatcher from './../Dispatcher';

const OrdersActions = {
  addOrder(order) {
    Dispatcher.dispatch({
      type: OrdersActionTypes.ADD_ORDER,
      order
    });
  },
  any() {
    Dispatcher.dispatch({
      type: OrdersActionTypes.ANY
    });
  },
};

export default OrdersActions;