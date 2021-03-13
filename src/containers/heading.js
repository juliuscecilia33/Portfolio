import React from "react";
import { Heading } from "../components";

export function HeadingContainer({ children, height, bgColor }) {
  return (
    <>
      <Heading height={height} bgColor={bgColor}>
        {children}
      </Heading>
    </>
  );
}
