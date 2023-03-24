import PropTypes from 'prop-types';
import { RiHeart3Fill } from 'react-icons/ri';
import { RiDislikeFill } from 'react-icons/ri';
import { UserItem } from './Friends.styled';

const GetFriendItem = ({ avatar, name, isOnline }) => {
  return (
    <UserItem>
      <span className="status">
        {isOnline ? (
          <RiHeart3Fill style={{ fill: '#FFFFFF' }} />
        ) : (
          <RiDislikeFill />
        )}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </UserItem>
  );
};

GetFriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default GetFriendItem;
