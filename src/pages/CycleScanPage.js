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
            <ProjectsV.AnchorCard
              href="https://devpost.com/software/cyclescan"
              bgColor="#F4F3EE"
              src="CycleScan"
              cursor="default"
            >
              <ProjectsV.Title
                ghLink="https://github.com/bkenza/CycleScan"
                regLink="https://devpost.com/software/cyclescan"
              >
                CycleScan
              </ProjectsV.Title>
              <ProjectsV.Description>
                Cross-platform mobile application that determines whether an
                object is recyclable, compostable or neither using object
                recognition.
              </ProjectsV.Description>
              <ProjectsV.Link>
                Check it out here:{" "}
                <span>
                  <a
                    href="https://devpost.com/software/cyclescan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://devpost.com/software/cyclescan
                  </a>
                </span>
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
            </ProjectsV.AnchorCard>
          </ProjectsV.Cards>
        </ProjectsV>
      </HeadingContainer>
      <CycleScanContainer />
      <FooterContainer />
    </>
  );
}
