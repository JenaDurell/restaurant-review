import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Stars from "../components/Stars";
import { format } from "date-fns";
import DetailedResponse from "../components/DetailedResponse";
const ReviewDetail = ({ location }) => {
  let publishedDate = format(
    new Date(location.state.publishedAt),
    "MM/dd/yyyy"
  );
  let stars = parseInt(location.state.rating);
  return (
    <div className="container">
      <Header pageName="Review Details" />
      <div className="review-box">
        <div className="review-box-content">
          <div className="place">{location.state.place}</div>
          <Stars numberOfStars={stars} />
          <div className="content">{location.state.content}</div>

          <div className="single-author-date-wrap">
            <div>{location.state.author}</div>
            <div className="date">{publishedDate}</div>
          </div>
        </div>
      </div>
      <DetailedResponse
        response={location.state.response}
        reviewId={location.state.id}
      />
    </div>
  );
};
export default ReviewDetail;
