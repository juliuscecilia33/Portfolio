import React from "react";

import {
  Container,
  Card,
  Header,
  Inputs,
  Input,
  Message,
  Bubble,
  Title,
  Label,
  Icons,
  Description,
  Button,
} from "./styles/contact";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Header = function ContactHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Contact.Card = function ContactCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Contact.Bubble = function ContactBubble({ children, ...restProps }) {
  return <Bubble {...restProps}>{children}</Bubble>;
};

Contact.Title = function ContactTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Contact.Description = function ContactDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Contact.Inputs = function ContactInputs({ children, ...restProps }) {
  return <Inputs {...restProps}>{children}</Inputs>;
};

Contact.Input = function ContactInput({
  height,
  placeholder,
  width,
  children,
  ...restProps
}) {
  return (
    <Input height={height} width={width} {...restProps}>
      <textarea placeholder={placeholder} />
    </Input>
  );
};

Contact.Label = function ContactLabel({ children, ...restProps }) {
  return <Label {...restProps}></Label>;
};

Contact.Icons = function ContactIcons({ children, ...restProps }) {
  return <Icons {...restProps}></Icons>;
};

Contact.Button = function ContactButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
