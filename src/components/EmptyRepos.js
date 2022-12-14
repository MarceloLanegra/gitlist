import styled from 'styled-components'

const EmptyReposStyled = styled.p`
  text-align: center;
  font: var(--headline2-semi-bold);
  margin-block-start: 5rem;
`;

function EmptyRepos() {
  return (
    <EmptyReposStyled>
      There are no repositories
    </EmptyReposStyled>
  )
}

export default EmptyRepos
