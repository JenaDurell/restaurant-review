import React from "react";
import "../styles/styles.css";
import Data from "../data/reviews.json";
import { Link } from "gatsby";
import Stars from "../components/Stars";
import { format } from "date-fns";
import TextTruncate from "react-text-truncate";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Masonry from "react-masonry-css";
import Response from "../components/Response";
const ReviewPreview = () => {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <div className='container'>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {Data.map((review) => {
          let publishedDate = format(
            new Date(review.published_at),
            "MM/dd/yyyy"
          );
            let response = JSON.stringify(review.response)
          return (
            <div key={review.id} className='box-sizer'>
              <div className="review-preview-box">
                <div >
                  <h4>{review.place}</h4>

                  <Stars numberOfStars={review.rating} />
                  <TextTruncate
                    line={1}
                    text={review.content}
                    textTruncateChild={
                      <Link
                        to="/detail/"
                        state={{
                          id: `${review.id}`,
                          place: `${review.place}`,
                          rating: `${review.rating}`,
                          content: ` ${review.content}`,
                          author: `${review.author}`,
                          published_at: `${review.published_at}`,
                          response: `${response}`,
                        }}
                      >
                        <ArrowRightAltIcon />
                      </Link>
                    }
                  />
                  <div className="author-date-wrap">
                    <h5 className="author">{review.author}</h5>
                    <h5 className="author">{publishedDate}</h5>
                    <Response response={review.response} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};
export default ReviewPreview;
