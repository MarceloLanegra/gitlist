import { isValidElement } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  flex: 1;
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  min-inline-size: 8.4375rem;
  padding-block: 0.25rem;
  border: 1px solid var(--grey);
  border-radius: 0.5rem;
  background-color: var(--buttonBG);
  font: var(--button);
  color: var(--white);
  cursor: pointer;
  text-decoration: none !important;
  justify-content: center;
  &:hover {
    background-color: var(--white);
    color: var(--buttonBG);
  }
  @media screen and (prefers-color-scheme: light) {
    background-color: var(--white);
    color: var(--buttonBG);
    &:hover {
      background-color: var(--buttonBG);
      color: var(--white);
    }
  }
`;

function Button({ text, link, className, icon }) {
  const component = link ? "a" : "button";
  let IconComponent = null;
  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon;
    }
  }
  return (
    <ButtonStyled as={component} href={link} className={className}>
      {IconComponent}
      {text}
    </ButtonStyled>
  );
}

export const ButtonContrast = styled(Button)`
  background-color: var(--white);
  font: var(--button);
  color: var(--buttonBG);
  &:hover {
    background-color: var(--buttonBG);
    color: var(--white);
  }
  @media screen and (prefers-color-scheme: light) {
    background-color: var(--buttonBG);
    color: var(--white);
    &:hover {
      background-color: var(--white);
      color: var(--buttonBG);
    }
  }
`;

export const ButtonRounded = styled(Button)`
  border: 2px solid var(--grey);
  border-radius: 50%;
  min-inline-size: initial;
  padding: 0.75rem;
  &:hover {
    background-color: var(--buttonBG);
    transform: scale(1.1);
  }
`;

export default Button;
