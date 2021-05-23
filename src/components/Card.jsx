import React from "react";
import { Link } from "react-router-dom";
import "../components/Card.css";

const Card = ({ img, heading, para, link, sign, subLink, subSign }) => {
  return (
    <div className="card">
      <img src={img} alt="card" />
      <h2>{heading}</h2>
      <p>{para}</p>
      <div className="sublink">
        <Link to="">{subLink}</Link>
        {subSign}
      </div>
      <div className="card__link">
        <Link to="">{link}</Link>
        {sign}
      </div>
    </div>
  );
};

export default Card;
