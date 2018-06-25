import React from 'react'
import RecipeBox from './RecipeBox'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = () => ({})

class MenuForTheDay extends React.Component {
    render() {
        const Recipes = this.props.recipes.map((recipe) => {
            return <Grid item sm={12} md={4}>
                <RecipeBox
                    name={recipe.name}
                    short_description={recipe.short_description}
                    cover={recipe.cover}
                    more_details={recipe.more_details}
                    description={recipe.description}
                />
            </Grid>
        })

        return (
            <React.Fragment>
                <Typography gutterBottom variant="display1" color="primary">{this.props.day}</Typography>
                <Grid container spacing={24}>
                    {Recipes}
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(MenuForTheDay)
