import React, { useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert } from "@material-ui/lab";

export function HeaderContainer({ bgColor }) {
  const [copy, setCopy] = useState(false);

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
            <a
              href="https://github.com/juliuscecilia33"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </Header.Icon>
          <Header.Icon>
            <a
              href="https://www.linkedin.com/in/julius-cecilia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </Header.Icon>
          <Header.Icon>
            <a
              href="https://slack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-slack"></i>
            </a>
          </Header.Icon>
          <Header.Icon>
            <CopyToClipboard text="julius!#4803">
              <button onClick={() => setCopy(true)}>
                <i class="fab fa-discord"></i>
              </button>
            </CopyToClipboard>
          </Header.Icon>
        </Header.Icons>
        {copy && (
          <Alert
            bgcolor="linear-gradient(130.16deg, #E0AFA0 9.59%, rgba(224, 175, 160, 0.43) 102.85%);"
            onClose={() => setCopy(false)}
          >
            Copied Discord ID!
          </Alert>
        )}
      </Header>
    </>
  );
}
