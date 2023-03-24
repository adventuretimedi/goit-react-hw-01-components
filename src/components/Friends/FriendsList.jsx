import PropTypes from 'prop-types';
// import friends from './friends.json';
import GetFriendItem from './FriendItem';
import { ListItem } from './Friends.styled';

const FriendsList = ({ friends }) => {
  // console.log(friends)
  return (
    <ListItem>
      {friends.map(friend => (
        <GetFriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ListItem>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.string,
};
export default FriendsList;
