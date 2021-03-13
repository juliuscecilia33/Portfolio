import React from "react";

import {
  Container,
  Header,
  Cards,
  Card,
  Image,
  Text,
  Title,
  Date,
  Location,
  Description,
} from "./styles/experiences";

export default function Experiences({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Experiences.Header = function ExperiencesHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Experiences.Cards = function ExperiencesCards({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>;
};

Experiences.Card = function ExperiencesCard({
  title,
  date,
  location,
  description,
  src,
  children,
  ...restProps
}) {
  return (
    <Card {...restProps}>
      <Image>
        <img src={`/images/${src}.png`} alt="Logo" />
      </Image>
      <Text>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Location>{location}</Location>
        <Description>{description}</Description>
      </Text>
    </Card>
  );
};
