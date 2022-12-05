import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  border-radius: .5rem;
  background-color: var(--buttonBG);
  color: var(--white);
  padding-inline: 1rem;
  /* padding-block: .5rem; */
  font: var(--body2-semi-bold);
`;

function Selector({children}) {
  return (
    <SelectorStyled>
      {children}
    </SelectorStyled>
  )
}

export default Selector
