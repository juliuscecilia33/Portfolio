import React from "react";
import { ProjectsV } from "../components";
import {
  HeaderContainer,
  HeadingContainer,
  FAOutletsContainer,
  FooterContainer,
} from "../containers";

export default function FAOutletsPage() {
  return (
    <>
      <HeaderContainer bgColor="#E3F2F5" />
      <HeadingContainer height="55vh" bgColor="#E3F2F5">
        <ProjectsV>
          <ProjectsV.Cards>
            <ProjectsV.AnchorCard
              href="https://faoutlets.netlify.app"
              bgColor="#F4F3EE"
              src="FAOutlets"
              cursor="default"
            >
              <ProjectsV.Title>FAOutlets</ProjectsV.Title>
              <ProjectsV.Description>
                An E-commerce Store that combines all Food Allergy manufacturers
                and products into one online hub!
              </ProjectsV.Description>
              <ProjectsV.Link>
                Check it out here:{" "}
                <span>
                  <a
                    href="https://faoutlets.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    faoutlets.netlify.app
                  </a>
                </span>
              </ProjectsV.Link>
              <ProjectsV.Hashtags>
                <ProjectsV.Hashtag>React.js</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Styled-Components</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Stripe</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Commerce.js</ProjectsV.Hashtag>
              </ProjectsV.Hashtags>
            </ProjectsV.AnchorCard>
          </ProjectsV.Cards>
        </ProjectsV>
      </HeadingContainer>
      <FAOutletsContainer />
      <FooterContainer />
    </>
  );
}
