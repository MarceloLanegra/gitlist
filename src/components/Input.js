import styled from 'styled-components'

const InputStyled = styled.input`
  background-color: var(--bg);
  border: 1px solid var(--grey);
  border-radius: 0.5rem;
  font: var(--body2-regular);
  padding-inline: 1rem;
  padding-block: 0.5rem;
  color: var(--white);
  flex: 1;
  &:focus {
    outline: var(--primary) solid 1px;
  }
  @media screen and (prefers-color-scheme: light) {
    background-color: var(--white);
    color: var(--black-2);
  }
`;

export default InputStyled
