import React from 'react';

class CustomerReviewBox extends React.Component {
  render() {
    return (
      <div className="customer_review_box">
        <div className="customer_review_box">
          <h1>{this.props.title}</h1>
          <div className="customer_details">
            <span className="name">{this.props.name}</span>
            <span className="location">{this.props.location}</span>
          </div>
          <p>{this.props.review}</p>
        </div>
      </div>
    )
  }
}

export default CustomerReviewBox;
