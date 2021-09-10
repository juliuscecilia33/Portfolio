import React from "react";
import { Image, Text, ProjectsV } from "../components";

export function JoblicantContainer() {
  return (
    <>
      <Text>
        <Text.Title>About</Text.Title>
        <Text.Description>
          Joblicant is a dashboard interface showcasing all your job
          applications in one place! The dashboard is dynamically updated by
          each action the user takes from creating, editing, and deleting
          applications. This results in the updating of a dynamic calendar which
          displays all your applications in a scheduled format to keep you
          organized with certain applications and their status (Interviews,
          results, etc.) Users can also save commonly used application
          information and easily copy/paste that over to whatever they're
          applying for.
        </Text.Description>
      </Text>
      <Text>
        <Text.Message>Figma mockups made by me!</Text.Message>
      </Text>
      <Image src="JoblicantPage1" />
      <Text>
        <Text.Title>How it started</Text.Title>
        <Text.Description>
          As a college student looking to step in the internship/work world of
          software engineering, I needed to keep track of all my applications
          and be populated in not just in text, but visually through a calendar
          without any secondary action from you. I also grew passionate to
          expand my skillset towards more backend and database tech stacks such
          as python/django and sqlite which both fit perfectly with this project
          I had in mind.
        </Text.Description>
      </Text>
      <Image src="JoblicantPage2" />
      <Text>
        <Text.Title>Features</Text.Title>
        <Text.Description>
          With Joblicant, users can create an application where they are asked
          to insert the job title, company name, date applied, status, interview
          date, and result. Not all of these applications are required, but can
          soon be edited later on which the user has access to, simply by
          clicking on the application or user actions button and clicking
          "edit". Users can also easily delete applications with a simple click
          of a button. By creating, editing, and deleting the application, it
          automatically populates or edits out the calendar feature Joblicant
          offers which gives the user a visual outlook of all their applications
          in a scheduled manner.
        </Text.Description>
      </Text>
      <Image src="JoblicantPage3" />
      <Text>
        <Text.Title>Future Steps</Text.Title>
        <Text.Description>
          Some future steps I want to take to improve Joblicant would be to add
          some scoring, or coin-earning system for each application that is
          applied or resulted in a success. I also want to easily link outer
          application sites which eases the application process all intern
          prospects do. With a simple click of a certain job posting, all of the
          required fields will be populated by Joblicant. This would possibly
          extend towards the form of a chrome extension which can be activated
          when on a job posting application. I also need to implement user
          authentication to allow users to securely store their applications.
          Finally, I would want to implement customizable views where users can
          have both the dashboard and calendar in one viewpoint, or customize it
          in their own way.
        </Text.Description>
      </Text>
      <Text>
        <Text.Title>Conclusion</Text.Title>
        <Text.Description>
          Even though Joblicant was a short project for me, I still found it
          very effective in my software engineer development and found it to be
          very enjoyable as I got to try out new technologies I haven't tried
          yet. It allowed me to gradually expand my skillset towards more of the
          backend and databases, as I gradually ease my way towards becoming a
          proficient full-stack developer. I hope to come back to this project
          and finish the future features I want to implement!
        </Text.Description>
      </Text>
      <ProjectsV>
        <ProjectsV.Cards>
          <ProjectsV.Card bgColor="#F5EEE3" src="Joblicant">
            <ProjectsV.Title>Joblicant</ProjectsV.Title>
            <ProjectsV.Description>
              A dashboard interface showcasing all your job applications in one
              place!
            </ProjectsV.Description>
            <ProjectsV.Link>
              Check it out here:{" "}
              <span>https://github.com/juliuscecilia33/Joblicant</span>
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
        </ProjectsV.Cards>
      </ProjectsV>
    </>
  );
}
