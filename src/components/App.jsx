import { Profile } from './Profile/Profile';
import user from 'user';
import { Statistics } from './Statistics/Statistics';
import data from 'data';
import { FriendList } from './FriendList/FriendList';
import friends from 'friends';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
    </div>
  );
};
