import React from "react";
import { Heading } from "../components";
import {
  HeaderContainer,
  HeadingContainer,
  ProjectsVContainer,
  FooterContainer,
} from "../containers";

export default function FeaturedPage() {
  return (
    <>
      <HeaderContainer bgColor="#F5F1E3" />
      <HeadingContainer height="35vh" bgColor="#F5F1E3">
        <Heading.Title>Featured Projects</Heading.Title>
        <Heading.Description>
          These are projects I have worked on that are either personally
          developed by me or in collaboration with a team.
        </Heading.Description>
      </HeadingContainer>
      <ProjectsVContainer />
      <FooterContainer />
    </>
  );
}
