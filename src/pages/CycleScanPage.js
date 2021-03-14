import React from "react";
import { ProjectsV } from "../components";
import {
  HeaderContainer,
  HeadingContainer,
  CycleScanContainer,
  FooterContainer,
} from "../containers";

export default function CycleScanPage() {
  return (
    <>
      <HeaderContainer bgColor="#E6F5E3" />
      <HeadingContainer height="55vh" bgColor="#E6F5E3">
        <ProjectsV>
          <ProjectsV.Cards>
            <ProjectsV.Card bgColor="#F4F3EE" src="CycleScan">
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
          </ProjectsV.Cards>
        </ProjectsV>
      </HeadingContainer>
      <CycleScanContainer />
      <FooterContainer />
    </>
  );
}
