import React from 'react';
import ButtonMakeReservation from './ButtonMakeReservation'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



class TakeawayHomeHowItWorks extends React.Component {
  render() {
    return (
        <section className="how_it_works">
          <Card elevation={2}>
            <CardContent>
              <Typography gutterBottom variant="display1" color="primary" >Takeaway</Typography>
              <Grid container spacing={24}>
                <Grid item sm={3}>
                  <img src="https://picsum.photos/400/200?image=514" alt="" style={{width: '100%'}}/>
                </Grid>
                <Grid item sm={9}>
                  <Typography variant="title">Location NE19 2RU</Typography>
                  <Typography gutterBottom variant="subheading">We prepare amazing food and in the meanwhile come to NE19 2RU</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae molestiae, earum et saepe, hic officia dolor eligendi, vero explicabo praesentium neque ex autem commodi. Totam blanditiis optio sint quod nostrum.
                    Dolorem voluptatibus eum, labore velit, soluta nemo. At rerum deleniti totam ullam voluptatum! Cumque totam incidunt eius nostrum! Excepturi debitis voluptatibus voluptatum.
                  </Typography>
                </Grid>

                <Grid item sm={9}>
                  <Typography variant="title">Delivery</Typography>
                  <Typography gutterBottom variant="subheading">Our box can be re-heated and have at least 450g of lovely homemade food :)</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae molestiae, earum et saepe, hic officia dolor eligendi, vero explicabo praesentium neque ex autem commodi. Totam blanditiis optio sint quod nostrum.
                  </Typography>
                </Grid>
                <Grid item sm={3}>
                  <img src="https://picsum.photos/400/200?image=674" alt="" style={{width: '100%'}}/>
                </Grid>

                <Grid item sm={3}>
                  <img src="https://picsum.photos/400/200?image=513" alt="" style={{width: '100%'}}/>
                </Grid>
                <Grid item sm={9}>
                  <Typography variant="title">Amazing Experience</Typography>
                  <Typography gutterBottom variant="subheading">Then you get amazed with how good our food is :D</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae molestiae, earum et saepe, hic officia dolor eligendi, vero explicabo praesentium neque ex autem commodi. Totam blanditiis optio sint quod nostrum.
                  </Typography>
                </Grid>
              </Grid>
              <br/>
              <ButtonMakeReservation url="/takeaway"/>
            </CardContent>
          </Card>
        </section>
    )
  }
}

export default TakeawayHomeHowItWorks;
