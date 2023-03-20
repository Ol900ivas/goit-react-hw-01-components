import { Profile } from './Profile/Profile';
import user from 'data/user';
import { Statistics } from './Statistics/Statistics';
import data from 'data/data';
import { FriendList } from './FriendList/FriendList';
import friends from 'data/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,

        color: '#010101',
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
