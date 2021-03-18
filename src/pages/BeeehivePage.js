import React from "react";
import { ProjectsV } from "../components";
import {
  HeaderContainer,
  HeadingContainer,
  BeeehiveContainer,
  FooterContainer,
} from "../containers";

export default function BeeehivePage() {
  return (
    <>
      <HeaderContainer bgColor="#F5F5E3" />
      <HeadingContainer height="55vh" bgColor="#F5F5E3">
        <ProjectsV>
          <ProjectsV.Cards>
            <ProjectsV.AnchorCard
              href="https://devpost.com/software/beehive"
              bgColor="#F4F3EE"
              src="Beeehive"
              cursor="default"
            >
              <ProjectsV.Title>Beeehive</ProjectsV.Title>
              <ProjectsV.Description>
                Beehive is a website designed to combine communication channels
                that have become popular in the new age of online learning.
              </ProjectsV.Description>
              <ProjectsV.Link>
                Check it out here:{" "}
                <span>
                  <a
                    href="https://devpost.com/software/beehive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://devpost.com/software/beehive
                  </a>
                </span>
              </ProjectsV.Link>
              <ProjectsV.Hashtags>
                <ProjectsV.Hashtag>React.js</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Sass</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Socket.io</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>Express.js</ProjectsV.Hashtag>
                <ProjectsV.Hashtag>MongoDB-Atlas</ProjectsV.Hashtag>
              </ProjectsV.Hashtags>
            </ProjectsV.AnchorCard>
          </ProjectsV.Cards>
        </ProjectsV>
      </HeadingContainer>
      <BeeehiveContainer />
      <FooterContainer />
    </>
  );
}
