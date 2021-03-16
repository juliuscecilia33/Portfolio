import React from "react";
import { ProjectsH } from "../components";
import * as ROUTES from "../constants/routes";

export function ProjectsHContainer() {
  return (
    <>
      <ProjectsH>
        <ProjectsH.Header>Featured Projects</ProjectsH.Header>
        <ProjectsH.Message>
          Click on a project card to get a detailed overview of it!
        </ProjectsH.Message>
        <ProjectsH.Cards>
          <ProjectsH.Card
            src="InstaDeck"
            title="InstaDeck"
            description="A semi-dashboard interface of Instagram that offers a comforting and appealing perspective for their Instagram feed. "
            bgColor="#F5E9E3"
            to={ROUTES.INSTADECK}
          />
          <ProjectsH.Card
            src="FAOutlets"
            title="FAOutlets"
            description="An E-commerce Store that combines all Food Allergy manufacturers and products into one online hub!"
            bgColor="#E3F2F5"
            to={ROUTES.FAOUTLETS}
          />
          <ProjectsH.Card
            src="CycleScan"
            title="CycleScan"
            description="Cross-platform mobile application that determines whether an object is recyclable, compostable or neither using object recognition."
            bgColor="#E6F5E3"
            to={ROUTES.CYCLESCAN}
          />
          <ProjectsH.Card
            src="ReThink"
            title="ReThink"
            description="A centralized, web-based platform to identify and promote small, sustainable businesses."
            bgColor="#E3EAF5"
            to={ROUTES.RETHINK}
          />
        </ProjectsH.Cards>
        <ProjectsH.Button to={ROUTES.PROJECTS}>
          View All Projects
        </ProjectsH.Button>
      </ProjectsH>
    </>
  );
}
