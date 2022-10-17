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
            title="Software Engineer Intern"
            date="June 2022 - September 2022"
            location="Seattle, Washington"
            description="Worked on Adobe’s Business admin console using React.js, Angular.js, Java for companies to utilize for their customers which improved Adobe’s support process as it allows for less intrusive methods to validate and troubleshoot customer issues."
            src="Adobe"
          />
        </Experiences.Cards>
        <Experiences.Button to={ROUTES.ABOUT}>
          View All Experiences
        </Experiences.Button>
      </Experiences>
    </>
  );
}
