import React from "react";
import {
  HeaderContainer,
  HeadingContainer,
  ProjectsVContainer,
  FooterContainer,
} from "../containers";

export default function HomePage() {
  return (
    <>
      <HeaderContainer bgColor="#F5F1E3" />
      <HeadingContainer height="35vh" bgColor="#F5F1E3" />
      <ProjectsVContainer />
      <FooterContainer />
    </>
  );
}