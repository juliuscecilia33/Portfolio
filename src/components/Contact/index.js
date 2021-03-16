import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Container, Header } from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Header = function ContactHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
