import React from "react";
import { Footer } from "../components";
import * as ROUTES from "../constants/routes";

export function FooterContainer() {
  return (
    <>
      <Footer bgColor="#F4F3EE">
        <Footer.Links>
          <Footer.Link to={ROUTES.HOME}>Home</Footer.Link>
          <Footer.Link to={ROUTES.PROJECTS}>Projects</Footer.Link>
          <Footer.Link to={ROUTES.ABOUT}>About</Footer.Link>
          <Footer.Link to={ROUTES.HOME}>Contact</Footer.Link>
        </Footer.Links>
        <Footer.Icons>
          <Footer.Icon>
            <i class="fab fa-github"></i>
          </Footer.Icon>
          <Footer.Icon>
            <i class="fab fa-linkedin"></i>
          </Footer.Icon>
          <Footer.Icon>
            <i class="fab fa-slack"></i>
          </Footer.Icon>
          <Footer.Icon>
            <i class="fab fa-discord"></i>
          </Footer.Icon>
        </Footer.Icons>
      </Footer>
    </>
  );
}
