import React from "react";

import { Container, Logos, Logo, Teams, Team, Text } from "./styles/image";

export default function Image({ src, children, ...restProps }) {
  return (
    <Container {...restProps}>
      <img src={`/images/${src}.png`} alt="Imgs" />
    </Container>
  );
}

Image.Logos = function ImageLogos({ children, ...restProps }) {
  return <Logos {...restProps}>{children}</Logos>;
};

Image.Logo = function ImageLogo({ src, children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <img src={`/images/${src}.png`} alt="Card" />
    </Logo>
  );
};

Image.Teams = function ImageTeams({ children, ...restProps }) {
  return <Teams {...restProps}>{children}</Teams>;
};

Image.Team = function ImageTeam({ src, children, ...restProps }) {
  return (
    <Team {...restProps}>
      <img src={`/images/${src}.png`} alt="Card" />
      <Text>{children}</Text>
    </Team>
  );
};
