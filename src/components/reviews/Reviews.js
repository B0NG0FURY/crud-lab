import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    let reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    return reviews.map(
      review => (
        <Review review={review} key={review.id} deleteReview={this.props.deleteReview} />
      )
    );
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;