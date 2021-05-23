import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import SkewLoader from "react-spinners/SkewLoader";
import Business from "./components/Business";
import Follow from "./components/Follow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImgSlider from "./components/ImgSlider";
import Intro from "./components/Intro";
import Response from "./components/Response";
import Showcase from "./components/Showcase";
import Surface from "./components/Surface";

const App = () => {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    margin: 20rem auto;
  `;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <>
      {loading ? (
        <SkewLoader
          css ={override}
          Loading={loading}
          color={"#000"}
          size={100}
         />
      ) : (
        <>
          <div className="app">
            <Header />
            <ImgSlider />
            <Showcase />
            <Intro />
            <Surface />
            <Business />
            <Response />
            <Follow />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
