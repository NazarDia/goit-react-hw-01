import userData from "../userData.json";
import { Profile } from "./profile/Profile";

export const App = () => {
  return (
    <div>
      <Profile info={userData} />
    </div>
  );
};
