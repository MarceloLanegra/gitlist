import styled from "styled-components";
import props from "./Profile-data";
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
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }

  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    margin-block-end: 1.5rem;
  }
`;

function Profile() {
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
      <Icon />
      <img
        className="avatar"
        src={avatar_url}
        alt=""
        width="278"
        height="278"
      />
      <p className="name">{name}</p>
      <p className="username">{login}</p>
      <div className="buttons">
        <Button
          text="Follow"
          link="#"
          className="custom"
        />
        <Button
          text="Sponsor"
          icon={<Icon name="heart" size={24} color="var(--pink)" />}
        />
      </div>
      <p className="bio info">{bio}</p>
      <p className="followers info">
        ● {followers} <span>followers</span> <span>●</span>
        {following} <span>following</span>
      </p>
      {/* <p className="stars info">● 81</p> */}
      <p className="location info">● {location}</p>
      <a href={blog} className="info" target="_blank">
        {blog}
      </a>
      <a
        href={`https://twitter.com/${twitter_username}`}
        className="info"
        target="_blank"
      >
        {twitter_username}
      </a>
    </ProfileStyled>
  );
}

export default Profile;
