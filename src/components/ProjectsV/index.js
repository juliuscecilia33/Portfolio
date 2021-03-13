import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  Message,
  Cards,
  Card,
  Image,
  Text,
  Title,
  Description,
  Link,
  Hashtags,
  Hashtag,
} from "./styles/projectsV";

export default function ProjectsV({ bgColor, children, ...restProps }) {
  return (
    <Container bgColor={bgColor} {...restProps}>
      {children}
    </Container>
  );
}

ProjectsV.Message = function ProjectsVMessage({ children, ...restProps }) {
  return <Message {...restProps}>{children}</Message>;
};

ProjectsV.Cards = function ProjectsVCards({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>;
};

ProjectsV.Card = function ProjectsVCard({
  link,
  src,
  title,
  description,
  bgColor,
  children,
  ...restProps
}) {
  return (
    <Card bgColor={bgColor} {...restProps}>
      <Image>
        <img src={`/images/${src}.png`} alt="Card" />
      </Image>
      <Text>
        <Title>
          <h2>{title}</h2>
          <i class="fab fa-github"></i>
          <i class="fas fa-link"></i>
        </Title>
        <Description>{description}</Description>
        <Link>{link}</Link>
        <Hashtags>{children}</Hashtags>
      </Text>
    </Card>
  );
};

ProjectsV.Hashtag = function ProjectsVHashtag({ children, ...restProps }) {
  return <Hashtag {...restProps}>{children}</Hashtag>;
};
