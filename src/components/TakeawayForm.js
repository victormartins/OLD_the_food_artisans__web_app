import React from 'react'
import TakeawayActions from '../data/TakeawayActions'
import MenuForTheDay from './MenuForTheDay'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import TakeawayStore from '../data/TakeawayStore';

const styles = () => ({})

class TakeawayForm extends React.Component {
  render() {
    const DailyMenus = TakeawayStore.getState().daily_menus.map((menu) => {
      return <MenuForTheDay key={menu.day} day={menu.day} recipes={menu.recipes} />
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