import styled from "styled-components";
import Button from "./Button";
import Icon from "./icon";

const ProfileStyled = styled.div`
  grid-area: profile;
  .avatar {
    border-radius: 50%;
    border: 1px solid var(--grey-2);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name {
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: 0.5rem;
  }
  .username {
    margin-block-start: 0.5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth);
  }
  .info {
    color: var(--grey);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 1rem;
    font: var(--body2-regular);
    .counter {
      font: var(--body2-semi-bold);
      color: var(--grey-2);
    }
  }
  .bio {
    font: var(--body1-regular);
    color: var(--grey-2);
  }

  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    margin-block-end: 1.5rem;
  }

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-areas:
      "user-wrapper"
      "bio"
      "followers"
      "location"
      "blog"
      "social"
      "actions";
    .user-wrapper {
      grid-area: user-wrapper;
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .user-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      & > * {
        margin: 0;
      }
    }
    .avatar {
      inline-size: 5rem;
      block-size: 5rem;
      margin-block-end: 0;
    }
    .bio {
      grid-area: bio;
      margin-block-start: 1.5rem;
    }
    .followers {
      grid-area: followers;
      margin-block: 0;
    }
    .location {
      grid-area: location;
      margin-block-start: 1.5rem;
    }
    .blog {
      grid-area: blog;
      margin-block: 0;
    }
    .social {
      grid-area: social;
      margin-block-end: 1.5rem;
    }
    .buttons {
      grid-area: actions;
      margin-block: 0;
    }
  }

  @media screen and (prefers-color-scheme: light) {
    .name {
      color: var(--black);
    }
    .info {
      .counter {
        color: var(--grey);
      }
    }
    .bio {
      color: var(--grey);
    }
  }
`;

function Profile(props) {
  const {
    name,
    login,
    avatar_url,
    bio,
    followers,
    following,
    location,
    twitter_username,
    blog,
  } = props;
  return (
    <ProfileStyled>
      {/* <Icon /> */}
      <div className="user-wrapper">
        <img
          className="avatar"
          src={avatar_url}
          alt=""
          width="278"
          height="278"
        />
        <div className="user-details">
          <p className="name">{name}</p>
          <p className="username">{login}</p>
        </div>
      </div>
      <div className="buttons">
        <Button text="Follow" />
        <Button
          text="Sponsor"
          icon={<Icon name="heart" color="var(--pink)" />}
        />
      </div>
      <p className="bio info">{bio}</p>
      <p className="followers info">
        <Icon name="user" /> <span className="counter">{followers}</span>{" "}
        <span>Followers</span> <span>●</span>
        <span className="counter">{following}</span> <span>Following</span>
      </p>
      {/* <p className="stars info">● 81</p> */}
      <p className="location info">
        <Icon name="location" /> {location}
      </p>
      <a
        href={blog}
        className="info blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="link" />
        {blog}
      </a>
      <a
        href={`https://twitter.com/${twitter_username}`}
        className="info social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="twitter" />@{twitter_username}
      </a>
    </ProfileStyled>
  );
}

export default Profile;
  