import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import LazyLoad from "react-lazyload";

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
  AnchorCard,
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
  to,
  src,
  bgColor,
  children,
  ...restProps
}) {
  return (
    <ReactRouterLink to={to}>
      <Card bgColor={bgColor} {...restProps}>
        <Image>
          <LazyLoad
            height={200}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={`/images/${src}.png`} alt="Card" />
          </LazyLoad>
        </Image>
        <Text>{children}</Text>
      </Card>
    </ReactRouterLink>
  );
};

ProjectsV.AnchorCard = function ProjectsVCard({
  href,
  src,
  bgColor,
  children,
  ...restProps
}) {
  return (
    <a href={href}>
      <AnchorCard bgColor={bgColor} {...restProps}>
        <Image>
          <LazyLoad
            height={200}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={`/images/${src}.png`} alt="Anchor" />
          </LazyLoad>
        </Image>
        <Text>{children}</Text>
      </AnchorCard>
    </a>
  );
};

ProjectsV.Description = function ProjectsVDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

ProjectsV.Title = function ProjectsVTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      <h2>{children}</h2>
      <i class="fab fa-github"></i>
      <i class="fas fa-link"></i>
    </Title>
  );
};

ProjectsV.Link = function ProjectsVLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

ProjectsV.Hashtags = function ProjectsVHashtags({ children, ...restProps }) {
  return <Hashtags {...restProps}>{children}</Hashtags>;
};

ProjectsV.Hashtag = function ProjectsVHashtag({ children, ...restProps }) {
  return <Hashtag {...restProps}>{children}</Hashtag>;
};
