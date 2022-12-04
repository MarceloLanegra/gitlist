import styled from 'styled-components'

const LayoutStyled = styled.main`
  min-block-size: 100vh;
  max-inline-size: 75rem;
  padding-inline: 1.25rem;
  margin: auto;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 17.375rem 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 2rem;
    grid-template-areas: "profile filters" "profile repo-list";
  }
`;

function Layout({children}) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}

export default Layout
