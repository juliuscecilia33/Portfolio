import React from "react";
import { Contact } from "../components";
import emailjs from "emailjs-com";

export function ContactContainer({ children, height, bgColor }) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_xpmqxfb",
        e.target,
        "user_dcyLphz3uv8sjix2Ij0ND"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
              <Contact.Input
                type="text"
                width="49%"
                height="55px"
                placeholder="Name"
              />
              <Contact.Input
                type="email"
                width="49%"
                height="55px"
                placeholder="Email"
              />
            </Contact.HalfInputs>
            <Contact.Input
              type="text"
              width="100%"
              height="55px"
              placeholder="Subject"
            />
            <Contact.Message
              type="text"
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
