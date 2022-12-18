import {FriendListItem}  from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friend}) => { return (<section className={css.sectionFriendList}>
<ul className={css.friendList}>
  {friend.map(item =><FriendListItem item = {item} key={item.id}/>)}
</ul>
</section>
)}


FriendList.propTypes = {
    friend: PropTypes.array.isRequired,
}