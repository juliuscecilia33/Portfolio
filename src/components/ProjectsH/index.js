import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  Header,
  Message,
  Cards,
  Card,
  Image,
  Text,
  Title,
  Description,
} from "./styles/projectsH";

export default function ProjectsH({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ProjectsH.Header = function ProjectsHHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

ProjectsH.Message = function ProjectsHMessage({ children, ...restProps }) {
  return <Message {...restProps}>{children}</Message>;
};

ProjectsH.Cards = function ProjectsHCards({ children, ...restProps }) {
  return <Cards {...restProps}>{children}</Cards>;
};

ProjectsH.Card = function ProjectsHCard({
  to,
  src,
  title,
  description,
  bgColor,
  children,
  ...restProps
}) {
  return (
    <ReactRouterLink to={to}>
      <Card bgColor={bgColor} {...restProps}>
        <Image>
          <img src={`/images/${src}.png`} alt="Card" />
        </Image>
        <Text>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
      </Card>
    </ReactRouterLink>
  );
};
