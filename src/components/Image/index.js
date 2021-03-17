import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

import { Container, Logos, Logo, Teams, Team, Text } from "./styles/image";

export default function Image({ src, children, ...restProps }) {
  return (
    <Container {...restProps}>
      <LazyLoadImage effect="opacity" src={`/images/${src}.png`} alt="Imgs" />
    </Container>
  );
}

Image.Logos = function ImageLogos({ children, ...restProps }) {
  return <Logos {...restProps}>{children}</Logos>;
};

Image.Logo = function ImageLogo({ src, children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <LazyLoadImage effect="opacity" src={`/images/${src}.png`} alt="Logo" />
    </Logo>
  );
};

Image.Teams = function ImageTeams({ children, ...restProps }) {
  return <Teams {...restProps}>{children}</Teams>;
};

Image.Team = function ImageTeam({ src, children, ...restProps }) {
  return (
    <Team {...restProps}>
      <LazyLoadImage
        effect="opacity"
        src={`/images/${src}.png`}
        alt="Team Profile"
      />
      <Text>{children}</Text>
    </Team>
  );
};
