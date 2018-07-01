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
        const id = Date.now()
        return state.set(id, new Order({
          id,
          text: 'foo'
        }));

      default:
        return state;
    }
  }
}

export default new OrdersStore()
