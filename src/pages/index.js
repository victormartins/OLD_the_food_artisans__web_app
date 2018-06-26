import './../assets/app.css'

import React from 'react'
import PropTypes from 'prop-types'
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

class Index extends React.Component {
  state = {
    value: {
      order: {},
      takeaway: {
        "18 Jan": {
          menu: [
            { name: "Paellita do Risitas", short_description: "A Summer Hit" },
            { name: "Paellita do Risitas", short_description: "A Summer Hit" },
            { name: "Paellita do Risitas", short_description: "A Summer Hit" }
          ]
        }
      },
    }
  }

  render() {
    const { classes } = this.props
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <ShoppingCartButton />
          {/* <TopMenuBar /> # TODO: Make this show up only in scroll? */}
          <div className="main_content">
            <Router state={this.state}/>
          </div>
          <div className="main_footer">
            <MainFooter />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Index))
