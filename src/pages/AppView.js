import './../assets/app.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './../Router'
import MainFooter from './../components/MainFooter'
import ShoppingCartButton from '../components/ShoppingCartButton'
import withRoot from '../withRoot'

const styles = () => ({
  root: {},
  main_content: {}
})

class AppView extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <ShoppingCartButton />
          <div className="main_content">
            <Router/>
          </div>
          <div className="main_footer">
            <MainFooter />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default withRoot(withStyles(styles)(AppView))
