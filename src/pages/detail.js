import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Stars from "../components/Stars";
import { format } from "date-fns";
import DetailedResponse from "../components/DetailedResponse";
const ReviewDetail = ({location}) => {
    let publishedDate= format(new Date(location.state.published_at), "MM/dd/yyyy")
    let stars=parseInt(location.state.rating)
  return (
      <div className='container'>
      <Header pageName="Review Details" />
      <div className="review-box">
      <div>{location.state.place}</div>
      <Stars numberOfStars={stars}/>
      <div>{location.state.content}</div>
      <div>{location.state.author}</div>
      <div>{publishedDate}</div>
      </div>
      <DetailedResponse response={location.state.response} review_id={location.state.id}/>
    </div>
  );
};
export default ReviewDetail;
