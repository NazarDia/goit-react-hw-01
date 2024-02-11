import userData from "../userData.json";
import friends from "../friends.json";
import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";

export const App = () => {
  return (
    <div>
      <Profile info={userData} />
      <FriendList friends={friends} />
    </div>
  );
};
