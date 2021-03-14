import React from "react";
import { ProjectsV } from "../components";
import {
  HeaderContainer,
  HeadingContainer,
  ReThinkContainer,
  FooterContainer,
} from "../containers";
import * as ROUTES from "../constants/routes";

export default function ReThinkPage() {
  return (
    <>
      <HeaderContainer bgColor="#E3EAF5" />
      <HeadingContainer height="55vh" bgColor="#E3EAF5">
        <ProjectsV>
          <ProjectsV.Cards>
            <ProjectsV.Card bgColor="#F4F3EE" src="ReThink" to={ROUTES.RETHINK}>
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
      </HeadingContainer>
      <ReThinkContainer />
      <FooterContainer />
    </>
  );
}
