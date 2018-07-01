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
  state = {
    posts: null
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(posts => { this.setState({posts})})
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

export default withRoot(withStyles(styles)(AppView))
