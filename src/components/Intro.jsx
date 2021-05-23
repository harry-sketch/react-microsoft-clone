import React from "react";
import Card from "./Card";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "../components/Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <Card
        img="./images/intro/intro-1.png"
        heading="Surface Pro 7"
        para="More from the Pro you know. More powerful than ever, Surface Pro 7 features a laptop-class Intel® Core™ processor."
        link="Shop now"
        sign={<ChevronRightIcon />}
      />
      <Card
        img="./images/intro/intro-2.png"
        heading="Microsoft 365"
        para="Premium Office apps, extra cloud storage, advanced security, and more – all in one convenient subscription."
        subLink="For up to 6 people"
        subSign={<ChevronRightIcon />}
        link="Shop now"
        sign={<ChevronRightIcon />}
      />
      <Card
        img="./images/intro/intro-3.png"
        heading="Xbox Game Pass Ultimate"
        para="World-class performance with more privacy, more productivity and more value while you browse."
        link="Join now"
        sign={<ChevronRightIcon />}
      />
      <Card
        img="./images/intro/intro-4.png"
        heading="Microsoft Edge"
        para="World-class performance with more privacy, more productivity and more value while you browse.."
        link="Download now"
        sign={<ChevronRightIcon />}
      />
    </div>
  );
};

export default Intro;
