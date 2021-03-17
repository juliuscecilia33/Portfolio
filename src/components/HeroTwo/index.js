import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

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
      <LazyLoadImage effect="opacity" src="/images/Avatar2.png" alt="Avatar" />
    </Image>
  );
};
