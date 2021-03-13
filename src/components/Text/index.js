import React from "react";

import { Container, Title, Description, Message } from "./styles/text";

export default function Text({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Text.Title = function TextTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Text.Description = function TextDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Text.Message = function TextMessage({ children, ...restProps }) {
  return <Message {...restProps}>{children}</Message>;
};
