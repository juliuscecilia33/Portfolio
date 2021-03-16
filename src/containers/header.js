import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ bgColor }) {
  return (
    <>
      <Header bgColor={bgColor}>
        <Header.Links>
          <Header.Link to={ROUTES.HOME}>Home</Header.Link>
          <Header.Link to={ROUTES.PROJECTS}>Projects</Header.Link>
          <Header.Link to={ROUTES.ABOUT}>About</Header.Link>
          <Header.Link to={ROUTES.CONTACT}>Contact</Header.Link>
        </Header.Links>
        <Header.Icons>
          <Header.Icon>
            <i class="fab fa-github"></i>
          </Header.Icon>
          <Header.Icon>
            <i class="fab fa-linkedin"></i>
          </Header.Icon>
          <Header.Icon>
            <i class="fab fa-slack"></i>
          </Header.Icon>
          <Header.Icon>
            <i class="fab fa-discord"></i>
          </Header.Icon>
        </Header.Icons>
      </Header>
    </>
  );
}
