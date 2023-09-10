// import logo from './logo.svg';
import './App.css';

import user from 'user.json';
import data from 'data.json'
import friends from 'friends.json'
import items from 'transactions.json'

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export function App() {
  return (
    <>
      <div className='back'>
        <Profile username={user.username} tag={user.tag} 
        location={user.location} avatar={user.avatar} stats={user.stats}/>
        <Statistics title={"Upload stats"} data={data}/>
        <FriendList friends={friends}/>
        <TransactionHistory items={items}/>
      </div>
    </>
  );
}

export default App;