import React from 'react';
import TakeawayHowItWorks from './../components/TakeawayHowItWorks'
import TakeawayForm from './../components/TakeawayForm'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

class Takeaway extends React.Component {
  state = {
    value: 1,
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;

    return (
      <div className="takeaway">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="primary"
          fullWidth
        >
          <Tab label="How does it work?" />
          <Tab label="Make a Reservation" />
        </Tabs>

        {value === 0 && <TakeawayHowItWorks/>}
        {value === 1 &&  <TakeawayForm/>}
      </div>
    )
  }
}

export default Takeaway;
