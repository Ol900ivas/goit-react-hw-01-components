import PropTypes from 'prop-types';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiGift, FiBell } from 'react-icons/fi';
import css from './Profile.module.css';
// import user from '../user.json';

{
  /* <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>; */
}

export const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <FiGift />
        <FiBell />
        <img src={avatar} alt="User avatar" className="avatar" />
        <AiOutlineClockCircle />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers </span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views </span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Profile.PropTypes = {
//   user: PropTypes.array.isRequired,
// };
