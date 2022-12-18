import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({user}) => {

return <div className={css.profile}  key={user.username}>
  <div className={css.description}>
    <img
      src={user.avatar}
      alt={user.username}
      className={css.avatar}
    />
    <p className={css.name}>{user.username}</p>
    <p className={css.tag}>{user.tag}</p>
    <p className={css.location}>{user.location}</p>
  </div>
  
  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{check(user.stats.followers)}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{check(user.stats.views)}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{check(user.stats.likes)}</span>
    </li>
  </ul>
  </div>
}

function check (num) {
  return (num > 1000) ?  Math.floor(num / 1000) + "," + (num - Math.floor(num / 1000)*1000): num
  }

check.propTypes = PropTypes.func

Profile.propTypes = {
user: PropTypes.shape({
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats:PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
})
})
}

