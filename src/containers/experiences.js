import React from "react";
import { Experiences } from "../components";

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
            description="I am a Front-End Developer for a Business RSO at UW that is creating a centralized, web-based platform to identify and promote small, sustainable businesses. We are using React.js to create an interactive UI for businesses that apply for our website
and will also be utilizing Google Firebase to help store the data for the users and create a dynamic
interface customized for each business."
            src="ReThinkLogo"
          />
          <Experiences.Card
            title="Student Researcher"
            date="Oct. 2020 - Present"
            location="Seattle, Washington"
            description="Student Researcher for IoT and Blockchain Implication in the Logistics and Supply Chain Industry.Student Researcher for IoT and Blockchain Implication in the Logistics and Supply Chain Industry."
            src="UWLogo"
          />
          <Experiences.Card
            title="Frontend Developer"
            date="Feb. 2021"
            location="Seattle, Washington"
            description="As a member of a team of four participating in the 2021 SD Hackathon, we developed a cross-platform mobile application that determines whether an object is recyclable, compostable or neither using object recognition. It was built using React Native, TypeScript, JavaScript, Python, Flask, the Google Cloud Vision API and Firebase."
            src="SDLogo"
          />
          <Experiences.Card
            title="Frontend Developer"
            date="Oct. 2021"
            location="Seattle, Washington"
            description="With a team of 4 people, we developed a web application known as Beeehive which is a website that focuses on accessibility, allowing users with different skill levels with technology to use Beehive’s simple interface to enhance e-learning."
            src="DubHacksLogo"
          />
        </Experiences.Cards>
      </Experiences>
    </>
  );
}
