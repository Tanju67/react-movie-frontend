import React, { useContext, useEffect, useState } from "react";
import classes from "./Reviews.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ReviewItem from "./ReviewItem";
import { OMDbApiContext } from "../../shared/context/omdbApi-context";
import { ServerAPIContext } from "../../shared/context/serverApi-context";
import { AuthContext } from "../../shared/context/auth-context";

function Reviews() {
  const { sendToServerRequest, reviewList, setReviewList } =
    useContext(ServerAPIContext);
  const { page, setTotalResults, totalResults, setPage } =
    useContext(OMDbApiContext);
  const totalPage = Math.ceil(totalResults / 10);
  const { user, isLoggedIn } = useContext(AuthContext);

  const [tabIndex, setTabIndex] = useState(1);

  let filteredReviewList;
  if (tabIndex === 2) {
    console.log(reviewList);
    filteredReviewList = reviewList.filter(
      (item) => item.createdBy._id === user.id
    );
  } else {
    filteredReviewList = reviewList;
  }

  useEffect(() => {
    sendToServerRequest(
      `review?page=${page}&limit=10`,
      "GET",
      undefined,
      { "Content-Type": "application/json" },
      (data) => {
        console.log(data);
        setReviewList(data.result);
        setTotalResults(data.total);
      }
    );
  }, [page]);

  const increasePageHandler = () => {
    if (page === totalPage) return;
    setPage((prev) => prev + 1);
  };

  const decreasePageHandler = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };
  return (
    <div className={classes.reviewPage}>
      <div className={classes.pageNav}>
        <span className={classes.page}>
          Page: {page} - {totalResults} found
        </span>
        {isLoggedIn && (
          <div className={classes.menu}>
            <span
              className={tabIndex === 1 ? classes.active : ""}
              onClick={() => setTabIndex(1)}
            >
              All Reviews
            </span>
            <span
              className={tabIndex === 2 ? classes.active : ""}
              onClick={() => setTabIndex(2)}
            >
              Your Review
            </span>
          </div>
        )}
        <span className={classes.icon}>
          <FaAngleLeft onClick={decreasePageHandler} />
          <FaAngleRight onClick={increasePageHandler} />
        </span>
      </div>
      <div className={classes.reviewsBox}>
        {filteredReviewList.map((item, i) => (
          <ReviewItem
            key={i}
            title={item.Title}
            poster={item.Poster}
            review={item.Review}
            imdbID={item.imdbID}
            name={item.createdBy.name}
            date={item.createdAt}
            createdBy={item.createdBy._id}
            userRating={item.UserRating}
            reviewId={item._id}
          />
        ))}
        {filteredReviewList.length === 0 && (
          <p style={{ textAlign: "center" }}>There is not any review yet.</p>
        )}
      </div>
    </div>
  );
}

export default Reviews;
