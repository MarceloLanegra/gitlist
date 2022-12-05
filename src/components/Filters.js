import styled from 'styled-components'
import Icon from './icon'
import InputStyled from './Input';
import Selector from './Selector';
import Separator from './Separator';

const FiltersStyled = styled.div`
  grid-area: filters;
  .count {
    margin: 0;
    margin-block-end: 1.5rem;
    font: var(--headline2-semi-bold);
    color: var(--white);
  }
  .action-list {
    display: flex;
    gap: 1rem;
  }
  .select-list {
    display: flex;
    gap: .5rem;
  }
`;

function Filters({repoListCount, setSearch}) {
  function handleChange(event){
    setSearch(event.target.value);
    
  }
  return (
    <FiltersStyled>
      <h2 className="count">Repositorios ({repoListCount})</h2>
      <div className="action-list">
        <InputStyled type="search" placeholder="Busca un repositorio" onChange={handleChange} />
        <div className="select-list">
        <Selector>
          <option disabled>Type</option>
          <option value="all">All</option>
          <option value="sources">Sources</option>
          <option value="forks">Forks</option>
          <option value="archived">Archived</option>
          <option value="mirrors">Mirrors</option>
        </Selector>
        <Selector>
          <option disabled>Language</option>
          <option value="all">All</option>
          <option value="css">CSS</option>
          <option value="javaScript">JavaScript</option>
          <option value="java">Java</option>
          <option value="html">HTML</option>
        </Selector>
        <Selector>
          <option disabled>Sort</option>
          <option value="last-updated">Last Updated</option>
          <option value="name">Name</option>
          <option value="stars">Stars</option>
        </Selector>
        </div>
      </div>
      <Separator/>
    </FiltersStyled>
  );
}

export default Filters
