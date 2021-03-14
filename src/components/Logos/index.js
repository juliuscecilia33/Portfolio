import React from "react";

import { Container, Logo, Text } from "./styles/logos";

export default function Logos({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Logos.Logo = function LogosLogo({ src, children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <img src={`/images/${src}.png`} alt="Logo" />
      <Text>{children}</Text>
    </Logo>
  );
};
