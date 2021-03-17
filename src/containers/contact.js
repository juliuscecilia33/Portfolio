import React, { useState } from "react";
import { Contact } from "../components";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert } from "@material-ui/lab";
const {
  REACT_APP_USER_ID,
  REACT_APP_SERVICE_ID,
  REACT_APP_TEMPLATE_ID,
} = process.env;
init(REACT_APP_USER_ID);

export function ContactContainer() {
  const [copy, setCopy] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Contact>
        <Contact.Header>Contact Me</Contact.Header>
        <Contact.Card>
          <Contact.Bubble>
            <Contact.Title>Contact Information</Contact.Title>
            <Contact.Labels>
              <i class="fas fa-phone-alt"></i>
              <p>562-332-4687</p>
            </Contact.Labels>
            <Contact.Labels>
              <i class="fas fa-envelope-open-text"></i>
              <p>juliuscecilia33@gmail.com</p>
            </Contact.Labels>
            <Contact.Icons>
              <a
                href="https://github.com/juliuscecilia33"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/julius-cecilia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://slack.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-slack"></i>
              </a>
              <CopyToClipboard text="julius!#4803">
                <button onClick={() => setCopy(true)}>
                  <i class="fab fa-discord"></i>
                </button>
              </CopyToClipboard>
            </Contact.Icons>
          </Contact.Bubble>
          <Contact.Inputs onSubmit={sendEmail}>
            <Contact.Description>
              Fill up the form and I will get back to you as soon as I can!
            </Contact.Description>
            <Contact.HalfInputs>
              <Contact.Input
                type="text"
                width="49%"
                height="55px"
                placeholder="Name"
                name="name"
              />
              <Contact.Input
                type="email"
                width="49%"
                height="55px"
                placeholder="Email"
                name="email"
              />
            </Contact.HalfInputs>
            <Contact.Input
              type="text"
              width="100%"
              height="55px"
              placeholder="Subject"
              name="subject"
            />
            <Contact.Message
              type="text"
              width="100%"
              height="190px"
              placeholder="Write a message..."
              name="message"
            />
            <Contact.Button type="submit">Send Message</Contact.Button>
          </Contact.Inputs>
        </Contact.Card>
        {copy && (
          <Alert
            bgcolor="linear-gradient(130.16deg, #E0AFA0 9.59%, rgba(224, 175, 160, 0.43) 102.85%);"
            onClose={() => setCopy(false)}
          >
            Copied Discord ID!
          </Alert>
        )}
      </Contact>
    </>
  );
}
