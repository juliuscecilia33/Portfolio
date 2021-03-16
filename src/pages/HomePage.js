import React from "react";
import {
  HeaderContainer,
  HeroContainer,
  ProjectsHContainer,
  ExperiencesContainer,
  FooterContainer,
  ContactContainer,
} from "../containers";

export default function HomePage() {
  return (
    <>
      <HeaderContainer bgColor="#F4F3EE" />
      <HeroContainer />
      <ProjectsHContainer />
      <ExperiencesContainer />
      <ContactContainer />
      <FooterContainer />
    </>
  );
}
