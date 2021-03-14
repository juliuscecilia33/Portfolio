import React from "react";

import { Container, Text, Title, Image, Description } from "./styles/heroTwo";

export default function HeroTwo({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

HeroTwo.Text = function HeroTwoText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

HeroTwo.Title = function HeroTwoTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

HeroTwo.Description = function HeroTwoDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

HeroTwo.Image = function HeroTwoImage({ children, ...restProps }) {
  return (
    <Image {...restProps}>
      <img src="/images/Avatar.png" alt="Avatar" />
    </Image>
  );
};
