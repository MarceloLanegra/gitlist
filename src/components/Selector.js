import styled from 'styled-components'

const SelectorStyled = styled.select`
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--buttonBG);
  color: var(--white);
  padding-inline-start: 1rem;
  padding-inline-end: 0.5rem;
  padding-block: 0.5rem;
  font: var(--body2-semi-bold);
  max-inline-size: 100px;
  &:focus {
    background-color: #4f545a;
  }
  @media screen and (min-width: 768px) {
    max-inline-size: unset;
    flex: 1;
  }
  @media screen and (prefers-color-scheme: light) {
    border: 1px solid var(--grey);
    background-color: var(--white);
    color: var(--black-2);
    &:focus {
      background-color: var(--white);
    }
  }
`;

function Selector({ children, setFilterLanguage,setFilterSort,value,defaultValue }) {
  function handleChangeSelect(event) {
    // if(value === 'language'){
    //   setFilterLanguage(event.target.value);
    // }
    switch (value) {
      case "language": {
        return setFilterLanguage(event.target.value);
      }
      case 'sort':{
        return setFilterSort(event.target.value);
      }
      default: {
        return null;
      }
    }
  }
  return (
    <SelectorStyled defaultValue={defaultValue} onChange={handleChangeSelect}>{children}</SelectorStyled>
  );
}

export default Selector
