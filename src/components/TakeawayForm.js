import React from 'react'
import TakeawayStore from '../stores/TakeawayStore'
import MenuForTheDay from './MenuForTheDay'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'

const styles = () => ({})

class TakeawayForm extends React.Component {
    constructor() {
        super()
        this.state={
            daily_menus: TakeawayStore.getAll()
        }
    }

    render() {
        const DailyMenus = this.state.daily_menus.map((menu) => {
            return  <MenuForTheDay day={menu.day} recipes={menu.recipes}/>
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
