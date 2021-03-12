import React from "react";

import { Container, Text, Title, Image, Description } from "./styles/hero";

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Text = function HeroText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Hero.Description = function HeroDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Hero.Image = function HeroImage({ children, ...restProps }) {
  return (
    <Image {...restProps}>
      <img src="/images/Avatar.png" alt="Avatar" />
    </Image>
  );
};
