import React from "react";

import { Container, Title, Description } from "./styles/heading";

export default function Heading({ height, bgColor, children, ...restProps }) {
  return (
    <Container height={height} bgColor={bgColor} {...restProps}>
      {children}
    </Container>
  );
}

Heading.Title = function HeadingTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Heading.Description = function HeadingDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};
