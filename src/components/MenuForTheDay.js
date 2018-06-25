import React from 'react'
import RecipeBox from './RecipeBox'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = () => ({})

class MenuForTheDay extends React.Component {
    render() {

        return (
            <React.Fragment>
                <Typography gutterBottom variant="display1" color="primary">{this.props.day}</Typography>
                <Grid container spacing={24}>
                    <Grid item sm={12} md={4}>
                        <RecipeBox />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <RecipeBox />
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <RecipeBox />
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(MenuForTheDay)
