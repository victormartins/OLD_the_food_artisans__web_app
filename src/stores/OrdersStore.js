// import {ReduceStore} from 'flux/utils'
import { EventEmitter } from 'events'

class OrdersStore extends EventEmitter {
  constructor() {
    super()
    this.orders = [ ]
  }

  any() {
    return this.orders.length > 0
  }
}

const ordersStore = new OrdersStore()

export default ordersStore