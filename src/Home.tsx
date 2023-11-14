import React from "react";
import SplashSVG from "./static/splash.svg";

import "./Home.css";

const Home: React.FunctionComponent = () => {
  return (
    <div className="HomeWrapper">
      <div className="HomeText">
        <h1>Hi, I'm Rocky PG.</h1>
        <div className="TagLine">
          I'm a front-end software engineer based in Seattle, WA.
        </div>
      </div>
      <div
        className="SVGWrapper"
        style={{ backgroundImage: `url(${SplashSVG})` }}
      />
    </div>
  );
};

export default Home;
