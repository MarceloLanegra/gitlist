import styled from "styled-components";
import Language from "./Language";
import Icon from "./icon";

const RepoItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block-start: 2rem;
  padding-block-end: 2rem;
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
    flex-wrap: wrap;
  }
  .topicItem {
    color: var(--primary);
    font: var(--caption-medium);
    background-color: #15223a;
    padding-inline: 0.75rem;
    padding-block: 0.25rem;
    border-radius: 2rem;
  }
  .details {
    display: flex;
    gap: 1rem;
    font: var(--caption-regular);
  }
  .details-item {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--grey-2);
    & span::first-letter {
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 768px) {
    padding-block-end: 1rem;
  }
  @media screen and (prefers-color-scheme: light) {
    .topicItem {
      color: var(--primary);
      background-color: #d5e8ff;
    }
  }
`;

function RepoItem(props) {
  const updateAt = new Date(props.updated_at)
  const today = new Date()
  const diffMillisecs = updateAt - today
  const diffDays = Math.ceil(diffMillisecs / (1000 * 60 *60 *24))
  const timeAgo = new Intl.RelativeTimeFormat('es').format(diffDays,'days')
  return (
    <RepoItemStyled>
      <h3 className="title">
        <a href={props.html_url} target="_blank" rel="noopener noreferrer">
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
            <span className="topicItem" key={item}>
              {item}
            </span>
          ))}
        </div>
      ) : null}
      <div className="details">
        {props.language ? <Language name={props.language} /> : null}
        <span className="details-item">
          <Icon name="star" color="var(--grey)" />
          <span>{props.stargazers_count}</span>
        </span>
        <span className="details-item">
          <Icon name="branch" color="var(--grey)" />
          <span>{props.forks_count}</span>
        </span>
        <span className="details-item">
          <span>{timeAgo}</span>
        </span>
      </div>
    </RepoItemStyled>
  );
}

export default RepoItem;
