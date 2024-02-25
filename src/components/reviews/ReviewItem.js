import React, { useContext, useEffect, useState } from "react";
import classes from "./ReviewItem.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import Button from "../../shared/UIElements/Button/Button";
import { ServerAPIContext } from "../../shared/context/serverApi-context";

function ReviewItem({
  poster,
  title,
  review,
  imdbID,
  name,
  date,
  createdBy,
  userRating,
  reviewId,
}) {
  const [readMore, setReadMore] = useState(false);
  const [screenWidth, setScreenWidtth] = useState(window.innerWidth);
  const { user } = useContext(AuthContext);
  const { sendToServerRequest } = useContext(ServerAPIContext);
  const navigate = useNavigate();

  const deleteReviewHandler = () => {
    const token = localStorage.getItem("token");
    sendToServerRequest(
      `review/${reviewId}`,
      "DELETE",
      undefined,
      { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      () => {
        navigate("/");
      }
    );
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidtth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);
  return (
    <div className={classes.reviewItem}>
      <div className={classes.posterBox}>
        <img src={poster} alt={title} />
      </div>
      <div className={classes.reviewDesc}>
        <div className={classes.info}>
          <p>
            Written by <span className={classes.name}>{name}</span> at{" "}
            <span className={classes.date}>
              {new Date(date).toLocaleDateString("de-DE", {})}
            </span>
          </p>
          <p>
            ⭐His Rating: <span className={classes.rate}>{userRating}</span>/10
          </p>
        </div>
        <Link to={`/${imdbID}`}>
          <h2>{title}</h2>
        </Link>
        <p className={classes.reviewText}>
          {readMore
            ? review
            : review.substring(0, Math.trunc(screenWidth / 4)) + "..."}{" "}
        </p>

        <span
          onClick={() => setReadMore((prev) => !prev)}
          className={classes.showMore}
        >
          {readMore ? <em> &uarr; show less</em> : <em> &darr; show more</em>}
        </span>
      </div>
      {createdBy === user.id && (
        <Button onClick={deleteReviewHandler} className={classes.deleteBtn}>
          Delete Your Review
        </Button>
      )}
    </div>
  );
}

export default ReviewItem;
