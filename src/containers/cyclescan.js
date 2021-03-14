import React from "react";
import { Image, Text, ProjectsV } from "../components";
import * as ROUTES from "../constants/routes";

export function CycleScanContainer() {
  return (
    <>
      <Text>
        <Text.Title>SD Hacks 2021</Text.Title>
        <Text.Description>
          CycleScan was a project built with my team at the SD Hacks 2021, one
          of the largest hackathons in California since its inception back in
          2015. Even though it was fully virtual, SD Hacks provided an
          unforgettable 36 hours of collaboration, empowerment, and innovation.
          We ended up winning the Wolfram Alpha Prize and this project was
          definitely something to be proud of!
        </Text.Description>
      </Text>
      <Image>
        <Image.Logos>
          <Image.Logo src="MLH" />
          <Image.Logo src="SDHacks" />
          <Image.Logo src="Pinnacle" />
        </Image.Logos>
      </Image>
      <Text>
        <Text.Title>Meet my team</Text.Title>
      </Text>
      <Image>
        <Image.Teams>
          <Image.Team src="Hussain">Hussain</Image.Team>
          <Image.Team src="Kimberly">Kimberly</Image.Team>
          <Image.Team src="Kenza">Kenza</Image.Team>
          <Image.Team src="Me">Me</Image.Team>
        </Image.Teams>
      </Image>
      <Text>
        <Text.Title>About</Text.Title>
        <Text.Description>
          Climate change is an evident problem happing globally. People throw
          out wastes without realizing a lot of materials are recyclable.
          CycleScan helps and encourages users to start recycling. This
          cross-platform mobile application determines whether an object is
          recyclable, compostable or neither using object recognition. Our
          mission is to save the planet one step at a time!
        </Text.Description>
      </Text>
      <Text>
        <Text.Message>Figma mockups made by me!</Text.Message>
      </Text>
      <Image src="CycleScanPages" />
      <iframe
        title="Video"
        width="420"
        height="315"
        src="https://www.youtube.com/watch?v=VcX_k6jmEIQ"
      ></iframe>
      <Text>
        <Text.Title>Contributions</Text.Title>
        <Text.Description>
          I worked mainly on the front end where it was my first time using
          React Native and Typescript. I was able to eventually pick it up and
          helped the different screens of the app look more appealing towards
          the viewer. I also contributed to the prototype of the app built in
          Figma.
        </Text.Description>
      </Text>
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
          After spending a long day and night with my teammates, it was such a
          fun and unforgettable experience as we were able to combine all the
          knowledge we had into this one app that turned out to be a success!
          Being able to work with others allowed me to expand beyond my limits
          of programming as I haven’t even touched languages like Typescript or
          React Native yet before attending this Hackathon. Even though there’s
          still a lot to learn with those languages and others as well, my team
          definitely helped me tremendously along the way and I’m glad I was
          able to pick up the languages at a solid pace so I can contribute as
          much as I can towards my team. In just these 36 hours, I feel like I
          have gained months worth of programming knowledge and I am determined
          to get even better each day!
        </Text.Description>
      </Text>
      <ProjectsV.Card bgColor="#E6F5E3;" src="CycleScan" to={ROUTES.CYCLESCAN}>
        <ProjectsV.Title>CycleScan</ProjectsV.Title>
        <ProjectsV.Description>
          Cross-platform mobile application that determines whether an object is
          recyclable, compostable or neither using object recognition.
        </ProjectsV.Description>
        <ProjectsV.Link>
          Check it out here: <span>https://devpost.com/software/cyclescan</span>
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
    </>
  );
}
