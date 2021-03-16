import React from "react";
import { Experiences } from "../components";
import * as ROUTES from "../constants/routes";

export function ExperiencesContainer() {
  return (
    <>
      <Experiences>
        <Experiences.Header>Experiences</Experiences.Header>
        <Experiences.Cards>
          <Experiences.Card
            title="Frontend Developer"
            date="Jan. 2021 - Present"
            location="Seattle, Washington"
            description="I am a Front-End Developer for a Business RSO at UW that is creating a centralized, web-based platform to identify and promote small, sustainable businesses. We are using React.js to create an interactive UI and will also be utilizing Google Firebase to help store the data for each business."
            src="ReThinkLogo"
          />
        </Experiences.Cards>
        <Experiences.Button to={ROUTES.ABOUT}>
          View All Experiences
        </Experiences.Button>
      </Experiences>
    </>
  );
}
