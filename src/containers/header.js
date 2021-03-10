import React from "react";
import { Header } from "../components";

export function HeaderContainer() {
  return (
    <>
      <Header bgColor="#F4F3EE">
        <Header.Links>
          <Header.Link>Home</Header.Link>
          <Header.Link>Projects</Header.Link>
          <Header.Link>About</Header.Link>
          <Header.Link>Contact</Header.Link>
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
