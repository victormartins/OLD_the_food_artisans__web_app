import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

const styles = () => ({
  main_footer: {
    backgroundColor: amber[600],
  },
});


class MainFooter extends React.Component {
  render() {
    return (
      <div className={this.props.classes.main_footer}>
        <div  className="main_footer__content">
          <Grid container spacing={24}>
          { /* TODO: Fix the URLs */ }
            <Grid item sm={4}>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Facebook</Link>
                  </li>
                  <li>
                    <Link to="/">Instagram Us</Link>
                  </li>
                  <li>
                    <Link to="/">Twitter</Link>
                  </li>
                </ul>
              </nav>
            </Grid>
            <Grid item sm={4}>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Homepage</Link>
                  </li>
                  <li>
                    <Link to="/about_us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Contacts</Link>
                  </li>
                  <li>
                    <Link to={`/privacy`}>Privacy</Link>
                  </li>
                </ul>
              </nav>
            </Grid>
            <Grid item sm={4}>
            <h1>NEWS LETTER </h1>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MainFooter);
