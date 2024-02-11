import '../node_modules/modern-normalize/modern-normalize.css';
import userData from './components/Data Files/userData.json';
import friends from './components/Data Files/friends.json';
import { Profile } from './components/Profile/Profile';
import { FriendList } from './components/FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile info={userData} />
      <FriendList friends={friends} />
    </div>
  );
};
