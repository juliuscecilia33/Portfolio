import React from "react";
import { Hero } from "../components";

export function HeroContainer() {
  return (
    <>
      <Hero>
        <Hero.Text>
          <Hero.Title>
            Hi, I'm <span>Julius</span>
          </Hero.Title>
          <Hero.Description>
            I’m a student at the <span>University of Washington</span> intending
            to major in Informatics! <br />
            <br />I envision myself to become a <span>
              Software Engineer
            </span>{" "}
            as I want to create and help others in their everyday lives through
            the form of a website or app.
          </Hero.Description>
        </Hero.Text>
        <Hero.Image />
      </Hero>
    </>
  );
}
