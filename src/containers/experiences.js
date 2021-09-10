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
            date="March 2021 - August 2021"
            location="Seattle, Washington"
            description="Using React.js, several AWS (Cognito, Amplify, Route 53, Lambda, EC2, RDS) technologies, and Python to develop a web application and assist with the company's goal of creating cutting edge cancer treatment diagnostics and therapies for patients recovering from COVID-19."
            src="Chimerocyte"
          />
        </Experiences.Cards>
        <Experiences.Button to={ROUTES.ABOUT}>
          View All Experiences
        </Experiences.Button>
      </Experiences>
    </>
  );
}
