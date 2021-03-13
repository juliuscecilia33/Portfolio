import React from "react";

import { Container, Title, Description } from "./styles/text";

export default function Text({ bgColor, children, ...restProps }) {
  return (
    <Container bgColor={bgColor} {...restProps}>
      {children}
    </Container>
  );
}

Text.Title = function TextTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Text.Description = function TextDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};
