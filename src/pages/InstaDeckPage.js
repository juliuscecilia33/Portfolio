import React from "react";
import { ProjectsV } from "../components";
import {
  HeaderContainer,
  HeadingContainer,
  InstaDeckContainer,
  FooterContainer,
} from "../containers";

export default function InstaDeckPage() {
  return (
    <>
      <HeaderContainer bgColor="#F5E9E3" />
      <HeadingContainer height="55vh" bgColor="#F5E9E3">
        <ProjectsV>
          <ProjectsV.Cards>
            <ProjectsV.AnchorCard
              href="https://github.com/juliuscecilia33/InstaDeck"
              bgColor="#F4F3EE"
              src="InstaDeck"
              cursor="default"
            >
              <ProjectsV.Title
                ghLink="https://github.com/juliuscecilia33/InstaDeck"
                regLink="https://github.com/juliuscecilia33/InstaDeck"
              >
                InstaDeck
              </ProjectsV.Title>
              <ProjectsV.Description>
                A semi-dashboard interface of Instagram made with React and
                Firebase!
              </ProjectsV.Description>
              <ProjectsV.Link>
                Check it out here:{" "}
                <span>
                  <a
                    href="https://github.com/juliuscecilia33/InstaDeck"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    instadeck.netlify.app
                  </a>
                </span>
              </ProjectsV.Link>
              <ProjectsV.Hashtags>
                <ProjectsV.Hashtag>React.js</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Styled-Components</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Firebase</ProjectsV.Hashtag>
              </ProjectsV.Hashtags>
            </ProjectsV.AnchorCard>
          </ProjectsV.Cards>
        </ProjectsV>
      </HeadingContainer>
      <InstaDeckContainer />
      <FooterContainer />
    </>
  );
}
