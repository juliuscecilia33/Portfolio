import React from "react";
import { ProjectsV } from "../components";
import * as ROUTES from "../constants/routes";

export function ProjectsVContainer() {
  return (
    <>
      <ProjectsV>
        <ProjectsV.Message>
          Click on a project card to get a detailed overview of it!
        </ProjectsV.Message>
        <ProjectsV.Cards>
          <ProjectsV.Card bgColor="#F5E9E3" src="InstaDeck">
            <ProjectsV.Title>InstaDeck</ProjectsV.Title>
            <ProjectsV.Description>
              A semi-dashboard interface of Instagram made with React and
              Firebase!
            </ProjectsV.Description>
            <ProjectsV.Link>
              Check it out here: <span>instadeck.netlify.app</span>
            </ProjectsV.Link>
            <ProjectsV.Hashtags>
              <ProjectsV.Hashtag>React.js</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Styled-Components</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Firebase</ProjectsV.Hashtag>
            </ProjectsV.Hashtags>
          </ProjectsV.Card>
          <ProjectsV.Card bgColor="#E3F2F5" src="FAOutlets">
            <ProjectsV.Title>FAOutlets</ProjectsV.Title>
            <ProjectsV.Description>
              An E-commerce Store that combines all Food Allergy manufacturers
              and products into one online hub!
            </ProjectsV.Description>
            <ProjectsV.Link>
              Check it out here: <span>faoutlets.netlify.app</span>
            </ProjectsV.Link>
            <ProjectsV.Hashtags>
              <ProjectsV.Hashtag>React.js</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Styled-Components</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Stripe</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Commerce.js</ProjectsV.Hashtag>
            </ProjectsV.Hashtags>
          </ProjectsV.Card>
          <ProjectsV.Card bgColor="#E6F5E3;" src="CycleScan">
            <ProjectsV.Title>CycleScan</ProjectsV.Title>
            <ProjectsV.Description>
              Cross-platform mobile application that determines whether an
              object is recyclable, compostable or neither using object
              recognition.
            </ProjectsV.Description>
            <ProjectsV.Link>
              Check it out here:{" "}
              <span>https://devpost.com/software/cyclescan</span>
            </ProjectsV.Link>
            <ProjectsV.Hashtags>
              <ProjectsV.Hashtag>React Native</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Typescript</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Firebase</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Javascript</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Python</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Flask</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Google Cloud Vision API</ProjectsV.Hashtag>
            </ProjectsV.Hashtags>
          </ProjectsV.Card>
          <ProjectsV.Card bgColor="#E3EAF5" src="ReThink">
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
        </ProjectsV.Cards>
      </ProjectsV>
    </>
  );
}
