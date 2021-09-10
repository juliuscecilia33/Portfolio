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
          <ProjectsV.Card
            bgColor="#F5E9E3"
            src="InstaDeck"
            to={ROUTES.INSTADECK}
            cursor="pointer"
          >
            <ProjectsV.Title>InstaDeck</ProjectsV.Title>
            <ProjectsV.Description>
              A semi-dashboard interface of Instagram made with React and
              Firebase!
            </ProjectsV.Description>
            <ProjectsV.Link>
              Check it out here:{" "}
              <span>
                <a
                  href="instagram.com"
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
          </ProjectsV.Card>
          <ProjectsV.Card
            bgColor="#F5EEE3"
            src="Joblicant"
            to={ROUTES.JOBLICANT}
            cursor="pointer"
          >
            <ProjectsV.Title>Joblicant</ProjectsV.Title>
            <ProjectsV.Description>
              A dashboard interface showcasing all your job applications in one
              place!
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
          </ProjectsV.Card>
          <ProjectsV.Card
            bgColor="#E3F2F5"
            src="FAOutlets"
            to={ROUTES.FAOUTLETS}
            cursor="pointer"
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
                  href="faoutlets.netlify.app"
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
          </ProjectsV.Card>
          <ProjectsV.Card
            bgColor="#E6F5E3;"
            src="CycleScan"
            to={ROUTES.CYCLESCAN}
            cursor="pointer"
          >
            <ProjectsV.Title>CycleScan</ProjectsV.Title>
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
          </ProjectsV.Card>
          <ProjectsV.Card
            bgColor="#E3EAF5"
            src="ReThink"
            to={ROUTES.RETHINK}
            cursor="pointer"
          >
            <ProjectsV.Title>ReThink</ProjectsV.Title>
            <ProjectsV.Description>
              A centralized, web-based platform to identify and promote small,
              sustainable businesses.
            </ProjectsV.Description>
            <ProjectsV.Link>
              Check it out here:{" "}
              <span>
                <a
                  href="www.subinitiative.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.subinitiative.com/
                </a>
              </span>
            </ProjectsV.Link>
            <ProjectsV.Hashtags>
              <ProjectsV.Hashtag>React.js</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Styled-Components</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Firebase</ProjectsV.Hashtag>
            </ProjectsV.Hashtags>
          </ProjectsV.Card>
          <ProjectsV.Card
            bgColor="#F5F5E3"
            src="Beeehive"
            to={ROUTES.BEEEHIVE}
            cursor="pointer"
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
          </ProjectsV.Card>
        </ProjectsV.Cards>
      </ProjectsV>
    </>
  );
}
