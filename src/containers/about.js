import React from "react";
import { Experiences, Logos } from "../components";
import { HeroTwoContainer } from "../containers";

export function AboutContainer() {
  return (
    <>
      <HeroTwoContainer />
      <Experiences>
        <Experiences.Header>Experiences</Experiences.Header>
        <Experiences.Cards>
          <Experiences.Card
            title="Software Engineer Intern"
            date="Mar. 2021 - Aug. 2021"
            location="Seattle, Washington"
            description="Using React.js, several AWS (Cognito, Amplify, Route 53, Lambda, EC2, RDS) technologies, and Python to develop a web application and assist with the company's goal of creating cutting edge cancer treatment diagnostics and therapies for patients recovering from COVID-19."
            src="Chimerocyte"
          />
          <Experiences.Card
            title="Software Engineer Intern"
            date="June 2021 - Sept. 2021"
            location="La Mirada, California"
            description="Improved website user experience and maintained existing web applications through Angular, Drupal CMS, Typescript, PHP, and Shopify. Also, I'm working in an agile/scrum sprint system where I have solved 20+ tickets resulting in customers across the globe having the best experience and accessibility on our site."
            src="IQAir"
          />
          <Experiences.Card
            title="Frontend Developer"
            date="May 2021 - July 2021"
            location="Seattle, Washington"
            description="Aiming to help complete a telemedicine application platform that simplifies the automation of patient health questionnaire forms, which will reduce psychiatric burnout and deliver our solution to underserved clinics, mental health facilities, and hospitals."
            src="Naireative"
          />
          <Experiences.Card
            title="Frontend Developer"
            date="Jan. 2021 - June 2021"
            location="Seattle, Washington"
            description="I am a Front-End Developer for a Business RSO at UW that is creating a centralized, web-based platform to identify and promote small, sustainable businesses. We are using React.js to create an interactive UI and will also be utilizing Google Firebase to help store the data for each business."
            src="ReThinkLogo"
          />
          <Experiences.Card
            title="Student Researcher"
            date="Oct. 2020 - Present"
            location="Seattle, Washington"
            description="Student Researcher for IoT and Blockchain Implication in the Logistics and Supply Chain Industry. With a team of three, we presented our year-long research on Blockchain and Supply Chain/IoT Technology for the 24th Annual Undergraduate Research Symposium."
            src="UWLogo"
          />
          <Experiences.Card
            title="Participant"
            date="Feb. 2021"
            location="Seattle, Washington"
            description="As a member of a team of four participating in the 2021 SD Hackathon, we developed a cross-platform mobile application that determines whether an object is recyclable, compostable or neither using object recognition. It was built using React Native, TypeScript, JavaScript, Python, Flask, the Google Cloud Vision API and Firebase."
            src="SDLogo"
          />
          <Experiences.Card
            title="Participant"
            date="Oct. 2021"
            location="Seattle, Washington"
            description="With a team of 4 people, we developed a web application known as Beeehive which is a website that focuses on accessibility, allowing users with different skill levels with technology to use Beehive’s simple interface to enhance e-learning."
            src="DubHacksLogo"
          />
        </Experiences.Cards>
      </Experiences>
      <Logos>
        <Logos.Header>Languages/Skills</Logos.Header>
        <Logos.Contain>
          <Logos.Logo src="React">React</Logos.Logo>
          <Logos.Logo src="Python">Python</Logos.Logo>
          <Logos.Logo src="Javascript">Javascript</Logos.Logo>
          <Logos.Logo src="Java">Java</Logos.Logo>
          <Logos.Logo src="CSS">CSS</Logos.Logo>
          <Logos.Logo src="Firebase">Firebase</Logos.Logo>
          <Logos.Logo src="HTML">HTML</Logos.Logo>
          <Logos.Logo src="NodeJS">Node.js</Logos.Logo>
          <Logos.Logo src="postgresql">PostgreSQL</Logos.Logo>
        </Logos.Contain>
      </Logos>
      <Logos>
        <Logos.Header>Currently learning</Logos.Header>
        <Logos.Contain>
          <Logos.Logo src="MongoDB">MongoDB</Logos.Logo>
          <Logos.Logo src="Typescript">Typescript</Logos.Logo>
        </Logos.Contain>
      </Logos>
      <Experiences>
        <Experiences.Header>Education</Experiences.Header>
        <Experiences.Cards>
          <Experiences.Card
            title="Sophmore, Class of 2024"
            location="Seattle, Washington"
            description="Major: Informatics"
            date="GPA: 3.8"
            src="UWLogo"
          />
        </Experiences.Cards>
      </Experiences>
    </>
  );
}
