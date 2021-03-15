import React from "react";
import { Image, Text, ProjectsV } from "../components";
import * as ROUTES from "../constants/routes";

export function BeeehiveContainer() {
  return (
    <>
      <Text>
        <Text.Title>SD Hacks 2021</Text.Title>
        <Text.Description>
          Beeehive was a project built with my team at the DubHacks hackathon
          2020, the largest 24-hour hackathon hosted in the Pacific Northwest.
          Even though it was fully virtual, my team was able to bond
          tremendously together creating unforgettable memories during the
          development of the website. Almost spending all night, we were so
          grateful with the outcome of our hard work and was actually credited
          by one of the judges! While we didn’t officially win, my first
          Hackathon will always be one to remember because of the project we
          developed and the unbelievable team I had.
        </Text.Description>
      </Text>
      <Image.Logos>
        <Image.Logo src="MLH" />
        <Image.Logo src="DubHacksLogo2" />
      </Image.Logos>
      <Text>
        <Text.Title>Meet my team</Text.Title>
      </Text>
      <Image.Teams>
        <Image.Team src="Hayley">Hayley</Image.Team>
        <Image.Team src="Paolo">Paolo</Image.Team>
        <Image.Team src="Sabina">Sabina</Image.Team>
        <Image.Team src="Andrey">Andrey</Image.Team>
        <Image.Team src="Me">Me</Image.Team>
      </Image.Teams>
      <Text>
        <Text.Title>About</Text.Title>
        <Text.Description>
          BeeeHive Project, a website designed to combine communication channels
          such as groupme or Discord that have become popular in the new age of
          online learning, was created with the help of a team from Dubhacks
          Hackathon 2020! Beeehive's interface focuses on accessibility,
          allowing users with different skill levels with technology to use
          Beehive’s simple interface to enhance e-learning.
        </Text.Description>
      </Text>
      <Text>
        <Text.Message>Figma mockups made by Hayley and Sabina!</Text.Message>
      </Text>
      <Image src="DubHacksPage1" />
      <Image src="DubHacksPage2" />
      <Image src="DubHacksPage3" />
      <Text>
        <Text.Title>Contributions</Text.Title>
        <Text.Description>
          I was in charge on the Frontend side of the app using React.js which
          at the time I had little experience with. But as hours gradually
          passed, I was able to pick up React.js with ease and we were able to
          complete the entire website by the due date! I used React.js to
          develop a dynamic UI for the users and helped integrate all the
          backend services to the existing code as well.
        </Text.Description>
      </Text>
      <Image src="DubHacksPage4" />
      <Image src="DubHacksPage5" />
      <Image src="DubHacksPage6" />
      <Text>
        <Text.Title>Features</Text.Title>
        <Text.Description>
          CycleScan is a mobile application that scans and identifies if an
          object is recyclable, compostable or neither. For entertainment, users
          can create an account to keep track of all the materials they've
          scanned to obtain badges and level up.
        </Text.Description>
      </Text>
      <Text>
        <Text.Title>Conclusion</Text.Title>
        <Text.Description>
          Beehive is an online environment designed to foster clear
          communication in instructor and student interactions. All students
          enrolled in a class are given a server code to join an ecosystem
          conducive to teaching assistant office hours, group project
          brainstorming, and exam preparation. Beehive seamlessly merges current
          messaging apps, video sharing services, and online classroom forums
          onto one platform. <br /> <br /> Beehive does not serve as a
          replacement for an entire course management system (such as Canvas,
          Blackboard, CCLE, etc.) but rather as an all-encompassing tool to
          simulate interactions found in a conventional classroom such as
          breakout sessions, one-on-one talks with Teachers/Teaching Assistants,
          and casual conversation relating to the course. Key features in our
          app include the whiteboard breakout room option, which allows one
          participant to interact with a board, and a calendar populated by the
          instructors to remind students of due dates. <br /> <br />
          Beehive is implemented with React, and consists of several Classes
          (“components”) that are declared in javascript files. The three main
          components are the Sidebar, a Classbar, and the content for a cluster
          or discussion channel. The Sidebar links to several class pages, each
          of which link to informational and group work channels. <br /> <br />{" "}
          To implement Beehive’s integrated whiteboards we utilized the
          collaborative Socket IO whiteboard. Several users can annotate the
          whiteboard at a time, and the whiteboard is automatically cleared each
          time the cluster is emptied and then a new group joins.
        </Text.Description>
      </Text>
      <ProjectsV>
        <ProjectsV.Card bgColor="#F5F5E3" src="Beeehive" to={ROUTES.BEEEHIVE}>
          <ProjectsV.Title>Beeehive</ProjectsV.Title>
          <ProjectsV.Description>
            Beehive is a website designed to combine communication channels that
            have become popular in the new age of online learning.
          </ProjectsV.Description>
          <ProjectsV.Link>
            Check it out here: <span>https://devpost.com/software/beehive</span>
          </ProjectsV.Link>
          <ProjectsV.Hashtags>
            <ProjectsV.Hashtag>React.js</ProjectsV.Hashtag>
            <ProjectsV.Hashtag>Sass</ProjectsV.Hashtag>
            <ProjectsV.Hashtag>Socket.io</ProjectsV.Hashtag>
            <ProjectsV.Hashtag>Express.js</ProjectsV.Hashtag>
            <ProjectsV.Hashtag>MongoDB-Atlas</ProjectsV.Hashtag>
          </ProjectsV.Hashtags>
        </ProjectsV.Card>
      </ProjectsV>
    </>
  );
}
