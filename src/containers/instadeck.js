import React from "react";
import { Image, Text, ProjectsV } from "../components";

export function InstaDeckContainer() {
  return (
    <>
      <Text>
        <Text.Title>About</Text.Title>
        <Text.Description>
          Instadeck is a semi-dashboard interface of Instagram made with React
          and Google Firebase! By providing different “decks” of posts from your
          personalized following post deck to the trending or popular deck,
          users of InstaDeck are given a comforting and appealing perspective
          for their Instagram feed.{" "}
        </Text.Description>
      </Text>
      <Text>
        <Text.Message>Figma mockups made by me!</Text.Message>
      </Text>
      <Image src="InstaDeckPage1" />
      <Image src="InstaDeckPage2" />
      <Text>
        <Text.Title>How it started</Text.Title>
        <Text.Description>
          InstaDeck could be called one of my{" "}
          <span>first official project</span> that I put a lot of time and
          commitment towards. It all started with a full-stack social media
          tutorial on Youtube and the impression of Instagram’s desktop version
          being not as appealing as it’s mobile version. Taking inspiration from
          Twitter’s dashboard app, TweetDeck, I decided to create and develop
          Instagram’s own dashboard app for its desktop version with InstaDeck!
        </Text.Description>
      </Text>
      <Image src="InstaDeckPage3" />
      <Image src="InstaDeckPage4" />
      <Text>
        <Text.Title>Features</Text.Title>
        <Text.Description>
          With the desktop version of InstaDeck having limiting functions in
          comparison to the mobile version, I decided to develop those lacking
          functions into InstaDeck such as posting on your feed through your
          computer. I also introduced a new analylitcal feature seen only by the
          user where they can keep track of their most recent count of likes or
          followers. Another new feature that I added for InstaDeck was having
          different types of accounts for those who have a verified or business
          account on Instagram. Accounts are able to be classified as either an
          admin, moderator, or editor by the owner of the verified or business
          account. Finally, users are able to customize the feeds they want to
          view by having posts filtered for each feed such as your following
          feed or a popular feed consisting of trending posts. I also hope to
          include a feature that can show or hide your analytics (likes or
          followers count) to show awareness and assist users uncomfortable in
          showing theirs.
        </Text.Description>
      </Text>
      <Image src="InstaDeckPage5" />
      <Image src="InstaDeckPage6" />
      <Image src="InstaDeckPage7" />
      <Image src="InstaDeckPage8" />
      <Text>
        <Text.Title>Conclusion</Text.Title>
        <Text.Description>
          As my first big project that took months to develop, I had fun
          creating InstaDeck from designing its prototype on Figma to developing
          the application with Firebase and organizing its database on Google
          Firebase!
        </Text.Description>
      </Text>
      <ProjectsV>
        <ProjectsV.Cards>
          <ProjectsV.Card bgColor="#F5E9E3" src="InstaDeck">
            <ProjectsV.Title>InstaDeck</ProjectsV.Title>
            <ProjectsV.Description>
              A semi-dashboard interface of Instagram made with React and
              Firebase!
            </ProjectsV.Description>
            <ProjectsV.Link>
              Check it out here: <span>instadeck.netlify.app</span>
            </ProjectsV.Link>
            <ProjectsV.Hashtags>
              <ProjectsV.Hashtag>React.js</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Styled-Components</ProjectsV.Hashtag>
              <ProjectsV.Hashtag>Firebase</ProjectsV.Hashtag>
            </ProjectsV.Hashtags>
          </ProjectsV.Card>
        </ProjectsV.Cards>
      </ProjectsV>
    </>
  );
}
