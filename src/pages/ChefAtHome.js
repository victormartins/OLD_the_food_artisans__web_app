import React from 'react';
import ChefAtHomeHowItWorks from './../components/ChefAtHomeHowItWorks'

class ChefAtHome extends React.Component {
  render() {
    return (
      <div className="chef_at_home">
        <h1>Chef@Home</h1>
        <div className="content container">
          <ChefAtHomeHowItWorks />
          <div className="reservation_form">
            <h2>Make a reservation:</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default ChefAtHome;
