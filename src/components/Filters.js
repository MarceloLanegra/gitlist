import styled from 'styled-components'
import Icon from './icon'

const FiltersStyled = styled.div`
  grid-area: filters;
  background-color: red;
`

function Filters() {
  return (
    <FiltersStyled>
      <Icon name="arrow-down" />
      <Icon name="book" />
      <Icon name="branch" />
      <Icon name="cancel" />
      <Icon name="check" />
      <Icon name="github" />
      <Icon name="heart" />
      <Icon name="home" />
      <Icon name="link" />
      <Icon name="location" />
      <Icon name="search" />
      <Icon name="star" />
      <Icon name="twitter" />
      <Icon name="user" />
    </FiltersStyled>
  );
}

export default Filters
