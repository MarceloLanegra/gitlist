import styled from "styled-components";
import Language from "./Language";

const RepoItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block-start: 2rem;
  padding-block-end: 1rem;
  border-block-end: 1px solid var(--grey);
  &:last-child {
    border-block-end: none;
  }
  .title {
    display: flex;
    gap: 1rem;
    margin: 0;
    a {
      color: var(--primary);
      text-decoration: none;
    }
  }
  .public {
    border: 1px solid var(--grey);
    border-radius: 0.5rem;
    padding-inline: 0.5rem;
    padding-block: 0.125rem;
    font: var(--caption-regular);
  }
  .description {
    margin: 0;
    font: var(--body2-regular);
  }
  .topicList {
    display: flex;
    gap: 0.25rem;
  }
  .topicItem {
    color: var(--primary);
    font: var(--caption-medium);
    background-color: #15223a;
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    border-radius: 2rem;
  }
`;

function RepoItem(props) {
  return (
    <RepoItemStyled>
      <h3 className="title">
        <a href={props.html_url} target="_blank">
          {props.name}
        </a>
        {!props.private ? <span className="public">Public</span> : null}
      </h3>
      {props.description ? (
        <p className="description">{props.description}</p>
      ) : null}
      {props.topics.length ? (
        <div className="topicList">
          {props.topics.map((item) => (
            <span className="topicItem">{item}</span>
          ))}
        </div>
      ) : null}
      {props.language ? <Language name={props.language}/> : null}
    </RepoItemStyled>
  );
}

export default RepoItem;
