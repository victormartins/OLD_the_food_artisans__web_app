import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import OrdersActionTypes from './OrdersActionTypes';
import Dispatcher from './../Dispatcher';
import Order from './Order';

class OrdersStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap()
  }

  reduce(state, action) {
    switch (action.type) {
      case OrdersActionTypes.ADD_ORDER:
        const order_id = Date.now()
        const order_info = action.order
        order_info.order_id = order_id

        // TODO VICMAR Add models
        // return state.set(id, new Order({
        //   id,
        //   text: 'foo'
        // }));

        return state.set(order_id, order_info);

      default:
        return state;
    }
  }
}

export default new OrdersStore()
