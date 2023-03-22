import PropTypes from 'prop-types';
import GetFriendItem from './FriendItem';

const FriendsList = ({ friends }) => {
  return (
    <ul className="friends-list">
      {friends.map(friend => (
        <GetFriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string
  })
}
export default FriendsList;

