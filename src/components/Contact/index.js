import React from "react";

import {
  Container,
  Card,
  Header,
  Inputs,
  Input,
  Bubble,
  Title,
  Icons,
  Description,
  HalfInputs,
  Button,
  Message,
  Labels,
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

Contact.HalfInputs = function ContactHalfInputs({ children, ...restProps }) {
  return <HalfInputs {...restProps}>{children}</HalfInputs>;
};

Contact.Input = function ContactInput({
  width,
  height,
  placeholder,
  children,
  ...restProps
}) {
  return (
    <Input width={width} height={height} {...restProps}>
      <input placeholder={placeholder} />
    </Input>
  );
};

Contact.Message = function ContactMessage({
  width,
  placeholder,
  children,
  ...restProps
}) {
  return (
    <Message width={width} {...restProps}>
      <textarea placeholder={placeholder} />
    </Message>
  );
};

Contact.Icons = function ContactIcons({ children, ...restProps }) {
  return <Icons {...restProps}>{children}</Icons>;
};

Contact.Labels = function ContactLabels({ children, ...restProps }) {
  return <Labels {...restProps}>{children}</Labels>;
};

Contact.Button = function ContactButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
