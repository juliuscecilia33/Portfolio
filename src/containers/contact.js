import React from "react";
import { Contact } from "../components";

export function ContactContainer({ children, height, bgColor }) {
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
              <i class="fab fa-github"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-slack"></i>
              <i class="fab fa-discord"></i>
            </Contact.Icons>
          </Contact.Bubble>
          <Contact.Inputs>
            <Contact.Description>
              Fill up the form and I will get back to you as soon as I can!
            </Contact.Description>
            <Contact.HalfInputs>
              <Contact.Input width="49%" height="55px" placeholder="Name" />
              <Contact.Input width="49%" height="55px" placeholder="Email" />
            </Contact.HalfInputs>
            <Contact.Input width="100%" height="55px" placeholder="Subject" />
            <Contact.Message
              width="100%"
              height="190px"
              placeholder="Write a message..."
            />
            <Contact.Button>Send Message</Contact.Button>
          </Contact.Inputs>
        </Contact.Card>
      </Contact>
    </>
  );
}
