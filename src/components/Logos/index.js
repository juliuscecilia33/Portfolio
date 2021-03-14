import React from "react";

import { Container, Logo, Text, Header } from "./styles/logos";

export default function Logos({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Logos.Header = function HeaderHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Logos.Logos = function LogosLogos({ children, ...restProps }) {
  return <Logos {...restProps}>{children}</Logos>;
};

Logos.Logo = function LogosLogo({ src, children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <img src={`/images/${src}.png`} alt="Logo" />
      <Text>{children}</Text>
    </Logo>
  );
};