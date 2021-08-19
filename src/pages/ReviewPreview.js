import React from "react";
import "../styles/styles.css";
import Data from "../data/reviews.json";
import { Link } from "gatsby";
import Stars from "../components/Stars";
import { format } from "date-fns";
import TextTruncate from "react-text-truncate";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Masonry from "react-masonry-css";
import ResponseCheck from "../components/ResponseCheck";
const ReviewPreview = () => {
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="container">
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
          return (
            <div key={review.id} className="box-sizer">
              <div className="review-preview-box">
                <div>
                  <div className="place">{review.place}</div>

                  <Stars numberOfStars={review.rating} />
                  <TextTruncate
                    className="content"
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
                        }}
                      >
                        <ArrowRightAltIcon className='right-icon'/>
                      </Link>
                    }
                  />
                </div>
                <div className="author-date-wrap">
                  <div>{review.author}</div>
                  <div className="date">{publishedDate}</div>
                  <ResponseCheck id={review.id} />
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
