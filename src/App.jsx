import { Profile } from './components/Profile/Profile';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import userData from './Data/userData.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';
import './App.css';
import '../node_modules/modern-normalize/modern-normalize.css';

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};