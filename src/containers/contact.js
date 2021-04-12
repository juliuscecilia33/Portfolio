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
  const [sent, setSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    console.log(e.target);

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
            {copy && (
              <Alert
                style={{ marginTop: "15px" }}
                onClose={() => setCopy(false)}
              >
                Copied Discord ID!
              </Alert>
            )}
          </Contact.Bubble>
          <Contact.Inputs onSubmit={sendEmail}>
            {sent && (
              <Alert
                style={{ marginBottom: "15px" }}
                onClose={() => setSent(false)}
              >
                Message Sent!
              </Alert>
            )}
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
            <Contact.Input
              type="text"
              width="100%"
              height="190px"
              placeholder="Write a message..."
              name="message"
            />
            <Contact.Button onClick={() => setSent(true)} type="submit">
              Send Message
            </Contact.Button>
          </Contact.Inputs>
        </Contact.Card>
      </Contact>
    </>
  );
}
