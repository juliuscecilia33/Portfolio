import React from "react";
import { ProjectsV } from "../components";
import {
  HeaderContainer,
  HeadingContainer,
  FooterContainer,
  JoblicantContainer,
} from "../containers";

export default function JoblicantPage() {
  return (
    <>
      <HeaderContainer bgColor="#F5EEE3" />
      <HeadingContainer height="55vh" bgColor="#F5EEE3">
        <ProjectsV>
          <ProjectsV.Cards>
            <ProjectsV.AnchorCard
              href="https://github.com/juliuscecilia33/Joblicant"
              bgColor="#F4F3EE"
              src="Joblicant"
              cursor="default"
            >
              <ProjectsV.Title
                ghLink="https://github.com/juliuscecilia33/Joblicant"
                regLink="https://github.com/juliuscecilia33/Joblicant"
              >
                Joblicant
              </ProjectsV.Title>
              <ProjectsV.Description>
                A dashboard interface showcasing all your job applications in
                one place!
              </ProjectsV.Description>
              <ProjectsV.Link>
                Check it out here:{" "}
                <span>
                  <a
                    href="https://github.com/juliuscecilia33/Joblicant"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/juliuscecilia33/Joblicant
                  </a>
                </span>
              </ProjectsV.Link>
              <ProjectsV.Hashtags>
                <ProjectsV.Hashtag>React.js</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Python</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Django</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Typescript</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>SQLite</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Styled Components</ProjectsV.Hashtag>
              </ProjectsV.Hashtags>
            </ProjectsV.AnchorCard>
          </ProjectsV.Cards>
        </ProjectsV>
      </HeadingContainer>
      <JoblicantContainer />
      <FooterContainer />
    </>
  );
}
