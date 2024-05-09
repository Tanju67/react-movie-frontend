/* eslint-disable react/prop-types */
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import classes from "./Carousel.module.css";

function PrevArrow(props) {
  const { onClick, style, className } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        borderRadius: "50%",
        top: "40%",
      }}
      onClick={onClick}
    ></div>
  );
}

function NextArrow(props) {
  const { onClick, style, className } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        borderRadius: "50%",
        top: "40%",
      }}
      onClick={onClick}
    ></div>
  );
}

function Carousel({ filmList, similar, watchlist, mainTitle, subTitle }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <h1 className={classes.mainTitle}>{mainTitle}</h1>
      <h2 className={classes.subTitle}>{subTitle}</h2>
      <ul className={classes.sliderBox}>
        {filmList?.length > 0 && (
          <Slider {...settings}>
            {filmList?.map((item, i) => (
              <SliderItem
                similar={similar}
                item={item}
                i={i}
                key={i}
                watchlist={watchlist}
              />
            ))}
          </Slider>
        )}
      </ul>

      {filmList?.length === 0 && (
        <p style={{ color: "#bbb" }}>Your watchlist is empty.</p>
      )}
    </div>
  );
}

export default Carousel;
