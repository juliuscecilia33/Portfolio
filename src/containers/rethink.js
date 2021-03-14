import React from "react";
import { Image, Text, ProjectsV } from "../components";
import * as ROUTES from "../constants/routes";

export function ReThinkContainer() {
  return (
    <>
      <Text>
        <Text.Title>About</Text.Title>
        <Text.Description>
          ReThink is a Business RSO at UW that is creating a centralized,
          web-based platform to identify and promote small, sustainable
          businesses.
        </Text.Description>
      </Text>
      <Text>
        <Text.Title>Role</Text.Title>
        <Text.Description>
          I am the Front-End Developer for ReThink where I will be using
          React.js to create an interactive UI for businesses that apply for our
          website and will also be utilizing Google Firebase to help store the
          data for the users and create a dynamic interface customized for each
          business. I am working alongside the development team of ReThink!
        </Text.Description>
      </Text>
      <Text>
        <Text.Message>Figma mockups made by the UI/UX team!</Text.Message>
      </Text>
      <Image src="ReThink1" />
      <Image src="ReThink2" />
      <Image src="ReThink3" />
      <Image src="ReThink4" />
      <Image src="ReThink5" />
      <Text>
        <Text.Title>Contributions</Text.Title>
        <Text.Description>
          I’m working mainly on the Frontend side of the app where we are all
          splitting the work between the multiple pages. I’m hoping to
          contribute as much as I can to the backend as well as I have had
          previous experience with Firebase and am always willing to help out
          the team as much as I can.
        </Text.Description>
      </Text>
      <Image src="ReThink6" />
      <Image src="ReThink7" />
      <Text>
        <Text.Title>Work In Progress</Text.Title>
        <Text.Description>
          Once most of the frontend side of the website/app is complete, we will
          be diving into branching for beta testing, creating an internal portal
          for blog posts, managing the database, tracking website analytics, and
          fixing any bugs that rise up.
        </Text.Description>
      </Text>
      <ProjectsV>
        <ProjectsV.Card bgColor="#E3EAF5" src="ReThink" to={ROUTES.RETHINK}>
          <ProjectsV.Title>ReThink</ProjectsV.Title>
          <ProjectsV.Description>
            A centralized, web-based platform to identify and promote small,
            sustainable businesses.
          </ProjectsV.Description>
          <ProjectsV.Link>
            Check it out here: <span>www.subinitiative.com/</span>
          </ProjectsV.Link>
          <ProjectsV.Hashtags>
            <ProjectsV.Hashtag>React.js</ProjectsV.Hashtag>
            <ProjectsV.Hashtag>Styled-Components</ProjectsV.Hashtag>
            <ProjectsV.Hashtag>Firebase</ProjectsV.Hashtag>
          </ProjectsV.Hashtags>
        </ProjectsV.Card>
      </ProjectsV>
    </>
  );
}
