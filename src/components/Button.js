import { isValidElement } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: inline-flex;
  gap: .5rem;
  align-items: center;
  min-inline-size: 8.4375rem;
  padding-block: .25rem;
  border: 1px solid var(--grey);
  border-radius: .5rem;
  background-color: var(--buttonBG);
  font: var(--buton);
  color: var(--white);
  cursor: pointer;
  text-decoration: none !important;
  justify-content: center;
  &:hover{
    background-color: var(--white);
    color: var(--buttonBG)
  }
`;

function Button({text, link,className,icon}) {
  const component = link ? 'a' : 'button'
  let IconComponent = null
  if (icon){
    if (isValidElement(icon)){
      IconComponent = icon
    }
  }
  return (
    <ButtonStyled as={component} href={link} className={className}>
      {IconComponent}
      {text}
    </ButtonStyled>
  )
}

export default Button
