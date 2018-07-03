import React from 'react'
import TakeawayActions from '../data/TakeawayActions'
import MenuForTheDay from './MenuForTheDay'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TakeawayStore from '../data/TakeawayStore';
import OrdersActions from './../data/OrdersActions'
import ServiceTypes from './../enums/ServiceTypes'

const styles = () => ({})

class TakeawayForm extends React.Component {
  addOrder = order_info => {
    const full_order_info = {
      recipe_id: order_info.id,
      recipe_name: order_info.name,
      service_type: ServiceTypes.TAKEAWAY
    }
    OrdersActions.addOrder(full_order_info)
  }

  render() {
    const DailyMenus = TakeawayStore.getState().daily_menus.map((menu) => {
      return <MenuForTheDay key={menu.day} day={menu.day} recipes={menu.recipes} addOrder={this.addOrder} />
    })

    return (
      <section className="takeaway_form">
        <FormControl>
          {DailyMenus}
        </FormControl>
      </section>
    )
  }
}

export default withStyles(styles)(TakeawayForm)