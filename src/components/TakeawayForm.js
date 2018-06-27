import React from 'react'
import TakeawayActions from '../data/TakeawayActions'
import MenuForTheDay from './MenuForTheDay'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'

const styles = () => ({})

function TakeawayForm(props) {
  console.log("Menus", props.takeaway)
  const DailyMenus = TakeawayActions.getDailyMenus().map((menu) => {
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

export default withStyles(styles)(TakeawayForm)
