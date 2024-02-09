import style from "./Profile.module.css";

export const Profile = ({
  info: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={style.container}>
      <div>
        <img className={style.profileImage} src={avatar} alt="User avatar" />
        <p className={style.name}>{username}</p>
        <p className={style.nickname}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.statsList}>
        <li className={style.statsItem}>
          <span className={style.statsTitle}>Followers</span>
          <span className={style.statsAmount}>{followers}</span>
        </li>

        <li className={style.statsItem}>
          <span className={style.statsTitle}>Views</span>
          <span className={style.statsAmount}>{views}</span>
        </li>

        <li className={style.statsItem}>
          <span className={style.statsTitle}>Likes</span>
          <span className={style.statsAmount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
