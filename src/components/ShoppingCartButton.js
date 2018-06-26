import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import Zoom from '@material-ui/core/Zoom'
import OrdersStore from '../stores/OrdersStore'

const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
        color: "white",
        margin: theme.spacing.unit,
    },
})

class ShoppingCartButton extends React.Component {
    state = {
       show: OrdersStore.any(),
    }
    render() {
        const { classes, theme } = this.props

        const transitionDuration = {
            enter: 200,
            exit: 150,
        }

        const shoppingCartButton = () => {
          return(
            <Zoom
                in={this.state.show}
                timeout={transitionDuration}
                style={{
                    transitionDelay: this.state.show ? transitionDuration.exit : 0,
                }}
                unmountOnExit
            >
                <Button variant="fab" className={classes.fab} color="secondary">
                    <ShoppingCart />
                </Button>
            </Zoom>
          )
        }

        return (
          <div className="shopping_cart_btn">
              {shoppingCartButton()}
          </div>
        )
    }
}

ShoppingCartButton.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ShoppingCartButton)
