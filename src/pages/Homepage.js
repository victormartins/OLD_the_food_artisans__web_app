import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ServiceBox from './../components/ServiceBox'
import TakeawayHowItWorks from './../components/TakeawayHowItWorks'

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <section className="services">
              <br/>
              <Typography gutterBottom variant="display1" align="center">What do we do?</Typography>

              <Grid container spacing={24}>
                <Grid item xs={12} sm={4}>
                  <ServiceBox
                    name='Takeway'
                    cover='https://picsum.photos/420/320?image=835'
                    description='Our popup takeway experience'
                    url='/takeaway'
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <ServiceBox
                    name='Chef@Home'
                    cover='https://picsum.photos/420/320?image=292'
                    description='We bring the experience to you.'
                    url='/chef_at_home'
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                 <ServiceBox
                    name='Group Events'
                    cover='https://picsum.photos/420/320?image=163'
                    description='You&Us&Friends'
                    url='/group_events'
                  />
                </Grid>
              </Grid>
            </section>
          </Grid>
          <Grid item xs={12}>
            <section className="all_how_it_works">
              <br/>
              <Typography gutterBottom variant="display1" color="default" align="center">How Does It Work?</Typography>
              <TakeawayHowItWorks />
              <br/>
              <TakeawayHowItWorks />
              <br/>
              <TakeawayHowItWorks />
            </section>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Homepage;
