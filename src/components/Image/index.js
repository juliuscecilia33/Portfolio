import React from "react";

import { Container } from "./styles/image";

export default function Image({ src, children, ...restProps }) {
  return (
    <Container {...restProps}>
      <img src={`/images/${src}.png`} alt="Imgs" />
    </Container>
  );
}
