import React from "react";
import { Image, Text, ProjectsV } from "../components";

export function FAOutletsContainer() {
  return (
    <>
      <Text>
        <Text.Title>About</Text.Title>
        <Text.Description>
          FA (Food Allergy) Outlets is an E-commerce Store that combines{" "}
          <span>all Food Allergy manufacturers and products</span> into one
          online hub. With the website being built in React.js, Commerce.js, and
          Stripe.js, buyers are able to view all of their food allergy
          necessities from widespread, popular brands all in one site.{" "}
        </Text.Description>
      </Text>
      <Text>
        <Text.Message>Figma mockups made by me!</Text.Message>
      </Text>
      <Image src="FAOutletsPage1" />
      <Text>
        <Text.Title>How it started</Text.Title>
        <Text.Description>
          After gaining some experience from my first project InstaDeck, I
          decided to start up a project that showcases a mainstream category of
          the web, E-commerce. Rather it be an ordinary store, I wanted my
          e-commerce store to serve a purpose, specifically for those who have
          food allergies. Having a sibling that can barely eat anything due to
          the severity of her food allergies, I understood how those with food
          allergies feel as they struggle to find food they can eat. With FA
          Outlets, buyers have an entire grocery hob in front of them accustomed
          for their food allergy needs with trusted, concentrated brands from
          Enjoy Life to King Arthur to SunButter. Many people underestimate the
          problem of food allergies in our world, and I hope to make people more
          aware of those with food allergies and at the same time assist those
          who have food allergies with the right and safe food for them.
        </Text.Description>
      </Text>
      <Image src="FAOutletsPage2" />
      <Image src="FAOutletsPage3" />
      <Text>
        <Text.Title>Features</Text.Title>
        <Text.Description>
          By having a built-in payment feature through the integration of
          Stripe, buyers are easily able to pay for their products they choose
          with their credit card and are also given shipping options from all
          over the globe using Commerce.js’s limitless options. Buyers also have
          access to all the companies available to them in the site and each
          companies’ products listed as well. Before they are led to the payment
          information page, buyers can view their checkout cart page where they
          can view, edit, or delete the food-allergy products they have added to
          their cart.
        </Text.Description>
      </Text>
      <Image src="FAOutletsPage4" />
      <Image src="FAOutletsPage5" />
      <Text>
        <Text.Title>Conclusion</Text.Title>
        <Text.Description>
          I had a lot of fun working on this project, especially in creating an
          e-commerce store that I hope to one day officially launch in the
          future! Most of all, it was just a great feeling to have to be able to
          take a step forwards towards helping people with food allergies as I
          understand the struggles they have from having a sibling born with
          extremely severe food allergies. I hope to extend FA Outlets to more
          of a social hub for people with food allergies, where they can share
          shopping lists they have or have created from FA Outlets, meet people
          with food allergies, write blogs that can be read by others needing
          your experience, and discovering foods or recipes you can eat as
          someone with food allergies.
        </Text.Description>
      </Text>
    </>
  );
}
