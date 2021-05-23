import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "../components/Surface.css";

const Surface = () => {
  return (
    <div className="surface">
      <img src="./images/surface.png" alt="surface" />
      <div className="surface__text">
        <h3>Surface Laptop Go</h3>
        <p>Make the most of every day with our lightest Surface Laptop</p>
        <div className="surface__link">
          <Link to="">Shop Now
          </Link>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Surface;
