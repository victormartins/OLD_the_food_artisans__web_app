import React from 'react'
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse'
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '4ch'
  }
});


class RecipeBox extends React.Component {
  state = {
    expanded: false,
    quantity: 0
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  addOrder = () => {
    const recipe_info = {
      id: this.props.id,
      name: this.props.name
    }

    this.props.addOrder(recipe_info)
  }

  handleQuantityChange = event => {
    this.addOrder()

    this.setState({
      quantity: Number(event.target.value),
    });
  };

  addOne = (event) => {
    this.addOrder()

    this.setState({
      quantity: this.state.quantity + 1
    });
  };

  render() {
    const { classes } = this.props;
    const Ingredients = this.props.ingredients.map((ingredient) => {
      return <Typography key={ingredient.name} component="p">• {ingredient.name}</Typography>
    })
    const quantityButton = () => {
      if (this.state.quantity > 0) {
        return(
          <TextField
            id="quantity"
            label="Quantity"
            type="number"
            className={classes.textField}
            onChange={this.handleQuantityChange}
            inputProps={{
              step: 1,
            }}
            value={this.state.quantity}
          />
        )
      }
    }


    return (
      <Card elevation={2}>
        <CardHeader
          title={this.props.name}
          subheader={this.props.short_description}
        />

        <CardMedia
          className={classes.media}
          image={this.props.cover}
          title={this.props.name}
        />

        <CardContent>
          <Typography component="p"> {this.props.description} </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="Add to favorites"
            color="secondary"
            onClick={this.addOne}
          >
            <AddShoppingCartIcon />
          </IconButton>
          {quantityButton()}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="primary">
                  Tell me more:
                    </Typography>
                <Typography>{this.props.more_details} </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body2" color="primary">
                  Ingredients:
                    </Typography>
                <Typography variant="caption"> (Alergens: Please Call Us!) </Typography>
                {Ingredients}
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}

export default withStyles(styles)(RecipeBox);
