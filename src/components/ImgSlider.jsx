import React from "react";
import "../components/ImgSlider.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";

const ImgSlider = () => {
  return (
    <Carousel
      className="slider"
      interval={5000}
      showThumbs={false}
      showStatus={false}
      autoPlay
      infiniteLoop
      showIndicators
    >
      <div className="wrap">
        <Link to="">
          <img src="./images/sliders/slider-1.png" alt="slider" />
        </Link>
        <div className="slider__wrap">
          <h3>Life's better together</h3>
          <p>Now use Microsoft Teams to chat,call and make plans with family</p>
          <p>and friends</p>
          <div className="slider__link">
            <Link to="">Learn More</Link>
            <ChevronRightOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="wrap">
        <Link to="">
          <img src="./images/sliders/slider-2.png" alt="slider" />
        </Link>
        <div className="slider__wrap">
          <h3>New Surface Laptop 4</h3>
          <p>Do it all with a perfect balance of sleek,ultra-thin design,</p>
          <p>multitasking speed and improved performance</p>
          <div className="slider__link">
            <Link to="">Learn More </Link>
            <ChevronRightOutlinedIcon />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default ImgSlider;
