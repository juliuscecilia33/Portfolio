import React from "react";

import { Container } from "./styles/image";

export default function Image({ src, bgColor, children, ...restProps }) {
  return (
    <Container {...restProps}>
      <img src={`/images/${src}.png`} alt="Imgs" />
    </Container>
  );
}
