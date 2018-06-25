import React from 'react';
import CustomerReviewBox from './../components/CustomerReviewBox'
import GroupEventsHowItWorks from './../components/GroupEventsHowItWorks'

class GroupEvents extends React.Component {
  render() {
    return (
      <div className="group_events">
        <h1>Group Events</h1>
        <div className="content container">
          <GroupEventsHowItWorks />
          <div className="reservation_form">
            <h2>Make a reservation:</h2>
          </div>
          <div className="reviews">
            <CustomerReviewBox title="WoW! Amazing Experience :)" name="John Doe" location="Kirkwhelpington" review="It was better than I could imagine!"/>
            <CustomerReviewBox title="WoW! Amazing Experience :)" name="John Doe" location="Kirkwhelpington" review="It was better than I could imagine!"/>
            <CustomerReviewBox title="WoW! Amazing Experience :)" name="John Doe" location="Kirkwhelpington" review="It was better than I could imagine!"/>
            <CustomerReviewBox title="WoW! Amazing Experience :)" name="John Doe" location="Kirkwhelpington" review="It was better than I could imagine!"/>
          </div>
        </div>
      </div>
    )
  }
}

export default GroupEvents;
