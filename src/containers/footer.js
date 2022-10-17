import React, { useState } from "react";
import { Footer } from "../components";
import * as ROUTES from "../constants/routes";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert } from "@material-ui/lab";

export function FooterContainer() {
  const [copy, setCopy] = useState(false);

  return (
    <>
      <Footer bgColor="#F4F3EE">
        <Footer.Links>
          <Footer.Link to={ROUTES.HOME}>Home</Footer.Link>
          <Footer.Link to={ROUTES.PROJECTS}>Projects</Footer.Link>
          <Footer.Link to={ROUTES.ABOUT}>About</Footer.Link>
          <Footer.Link to={ROUTES.CONTACT}>Contact</Footer.Link>
        </Footer.Links>
        <Footer.Icons>
          <Footer.Icon>
            <a
              href="https://github.com/juliuscecilia33"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </Footer.Icon>
          <Footer.Icon>
            <a
              href="https://www.linkedin.com/in/julius-cecilia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </Footer.Icon>
          <Footer.Icon>
            <CopyToClipboard text="julius!#4803">
              <button onClick={() => setCopy(true)}>
                <i class="fab fa-discord"></i>
              </button>
            </CopyToClipboard>
          </Footer.Icon>
        </Footer.Icons>
        {copy && (
          <Alert onClose={() => setCopy(false)}>Copied Discord ID!</Alert>
        )}
      </Footer>
    </>
  );
}
