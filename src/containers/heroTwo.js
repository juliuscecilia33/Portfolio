import React from "react";
import { HeroTwo } from "../components";

export function HeroContainer() {
  return (
    <>
      <HeroTwo>
        <HeroTwo.Text>
          <HeroTwo.Title>
            Hi, I'm <span>Julius</span>
          </HeroTwo.Title>
          <HeroTwo.Description>
            I’m a student at the <span>University of Washington</span> intending
            to major in Informatics! <br />I envision myself to become a{" "}
            <span>Web Developer/Software Engineer</span> as I want to create and
            help others in their everyday lives through the form of a website or
            app. <br />I found my passion for programming at the start of my
            college days. It was unfortunate that I did not discover this
            passion earlier on in my life, but I’m still very much grateful that
            I have found something that I truly love and enjoy to do every day
            in my life. <br />I look to one day become a Full-Stack Developer or
            Software Engineer and use my skills to impact many in beneficial
            ways.
          </HeroTwo.Description>
        </HeroTwo.Text>
        <HeroTwo.Image />
      </HeroTwo>
    </>
  );
}
