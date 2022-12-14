import styled from "styled-components";
import InputStyled from "./Input";
import Selector from "./Selector";
import Separator from "./Separator";

const FiltersStyled = styled.div`
  margin-block-start: 2.5rem;
  grid-area: filters;
  .count {
    display: none;
  }
  .action-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .select-list {
    display: flex;
    gap: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    margin-block-start: 0;
    .count {
      display: block;
      margin: 0;
      margin-block-end: 1.5rem;
      font: var(--headline2-semi-bold);
      color: var(--white);
    }
    .action-list {
      flex-direction: row;
    }
  }
  @media screen and (prefers-color-scheme: light) {
    .count{
      color: var(--black);
    }
  }
`;

function Filters({
  repoListCount,
  setSearch,
  setFilterLanguage,
  setFilterSort,
}) {
  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <FiltersStyled>
      <h2 className="count">Repositorios ({repoListCount})</h2>
      <div className="action-list">
        <InputStyled
          type="search"
          placeholder="Busca un repositorio"
          onChange={handleChange}
        />
        <div className="select-list">
          <Selector defaultValue={"type"}>
            <option value="type" disabled>
              Type
            </option>
            <option value="all">All</option>
            <option value="sources">Sources</option>
            <option value="forks">Forks</option>
            <option value="archived">Archived</option>
            <option value="mirrors">Mirrors</option>
          </Selector>
          <Selector
            defaultValue={"type"}
            setFilterLanguage={setFilterLanguage}
            value={"language"}
          >
            <option value="language" disabled>Language</option>
            <option value="all">All</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="html">HTML</option>
          </Selector>
          <Selector
            defaultValue={"type"}
            setFilterSort={setFilterSort}
            value={"sort"}
          >
            <option value="sort" disabled>Sort</option>
            <option value="last-updated">Last Updated</option>
            <option value="name">Name</option>
            <option value="stars">Stars</option>
          </Selector>
        </div>
      </div>
      <Separator />
    </FiltersStyled>
  );
}

export default Filters;
