import React from "react";
import { Image, Text } from "../components";

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
      <Text.Message>Figma mockups made by me!</Text.Message>
      <Image src="InstaDeckPage1" />
    </>
  );
}
