import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Container, Links, Link, Icons, Icon } from "./styles/header";

export default function Header({ bgColor, children, ...restProps }) {
  return (
    <Container bgColor={bgColor} {...restProps}>
      {children}
    </Container>
  );
}

Header.Links = function HeaderLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Header.Link = function HeaderLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Link {...restProps}>{children}</Link>
    </ReactRouterLink>
  );
};

Header.Icons = function HeaderIcons({ children, ...restProps }) {
  return <Icons {...restProps}>{children}</Icons>;
};

Header.Icon = function HeaderIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};
