import React from 'react'
import MenuForTheDay from './MenuForTheDay'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'

const styles = () => ({})

class TakeawayForm extends React.Component {
    render() {

        return (
            <section className="takeaway_form">
                <FormControl>
                    <br/>
                    <br/>
                    <MenuForTheDay day="25 June"/>
                    <br/>
                    <br/>
                    <MenuForTheDay day="26 June"/>
                </FormControl>
            </section>
        )
    }
}

export default withStyles(styles)(TakeawayForm)
