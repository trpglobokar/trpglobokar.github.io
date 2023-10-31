import React from "react";
import { Outlet } from "react-router-dom";

import MenuLink from "./MenuLink";

import "./Layout.css";

const Layout: React.FunctionComponent = () => {
  return (
    <>
      <nav className="Menu">
        <img
          className="MenuIcon"
          src={require("./static/pig-icon.png")}
          alt="Logo of a pig"
        />
        <MenuLink pathname="/projects" text="Projects" />
        <MenuLink pathname="/about" text="About" />
      </nav>
      <div className="Content">
        <div className="InnerContent">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
