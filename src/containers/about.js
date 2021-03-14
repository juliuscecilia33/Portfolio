import React from "react";
import { Experiences, Logos } from "../components";
import { HeroTwoContainer, ExperiencesContainer } from "../containers";

export function AboutContainer() {
  return (
    <>
      <HeroTwoContainer />
      <ExperiencesContainer />
      <Logos>
        <Logos.Header>Languages/Skills</Logos.Header>
        <Logos.Logos>
          <Logos.Logo src="React">React</Logos.Logo>
          <Logos.Logo src="Javascript">Javascript</Logos.Logo>
          <Logos.Logo src="ReactNative">React Native</Logos.Logo>
          <Logos.Logo src="CSS">CSS</Logos.Logo>
          <Logos.Logo src="Typescript">Typescript</Logos.Logo>
          <Logos.Logo src="Figma">Figma</Logos.Logo>
          <Logos.Logo src="Photoshop">Adobe Photoshop</Logos.Logo>
          <Logos.Logo src="AdobeXD">Adobe XD</Logos.Logo>
          <Logos.Logo src="Firebase">Firebase</Logos.Logo>
          <Logos.Logo src="HTML">HTML</Logos.Logo>
        </Logos.Logos>
      </Logos>
      <Logos>
        <Logos.Header>Languages/Skills</Logos.Header>
        <Logos.Logos>
          <Logos.Logo src="NodeJS">NodeJS</Logos.Logo>
          <Logos.Logo src="MongoDB">MongoDB</Logos.Logo>
          <Logos.Logo src="GraphQL">GraphQL</Logos.Logo>
          <Logos.Logo src="TypeORM">TypeORM</Logos.Logo>
        </Logos.Logos>
      </Logos>
      <Experiences>
        <Experiences.Header>Education</Experiences.Header>
        <Experiences.Cards>
          <Experiences.Card
            title="Freshman, Class of 2024"
            location="Seattle, Washington"
            description="Intended Major: Informatics"
            date="GPA: 3.9"
            src="UWLogo"
          />
        </Experiences.Cards>
      </Experiences>
    </>
  );
}
