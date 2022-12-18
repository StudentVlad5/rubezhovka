import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({item}) => {
    const {avatar, name, isOnline} = {...item};
    return (<li className={css.items}>
            <span className={css.status} style={{backgroundColor: checkStatus(isOnline)}}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
            </li>)
  }


function checkStatus (isOnline) {
return isOnline? 'green':'red' 
}

checkStatus.propTypes = PropTypes.func
FriendListItem.propTypes = {
    item: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
}