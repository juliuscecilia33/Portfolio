import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

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
      <LazyLoadImage effect="opacity" src="/images/Avatar.png" alt="Avatar" />
    </Image>
  );
};
