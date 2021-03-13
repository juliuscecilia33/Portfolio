import React from "react";
import { Heading } from "../components";

export function HeadingContainer({ bgColor }) {
  return (
    <>
      <Heading bgColor={bgColor}>
        <Heading.Title>Featured Projects</Heading.Title>
        <Heading.Description>
          These are projects I have worked on that are either personally
          developed by me or in collaboration with a team.
        </Heading.Description>
      </Heading>
    </>
  );
}
