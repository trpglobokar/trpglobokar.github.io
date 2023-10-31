import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./MenuLink.css";

interface MenuLinkProps {
  text: string;
  pathname: string;
}
const MenuLink: React.FunctionComponent<MenuLinkProps> = ({
  text,
  pathname,
}) => {
  const { pathname: currentPathName } = useLocation();

  const className =
    pathname === currentPathName ? "ActiveMenuLink" : "MenuLink";

  return (
    <Link className={className} to={pathname}>
      {text}
    </Link>
  );
};

export default MenuLink;
