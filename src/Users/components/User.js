import Search from './Search';
import List from './List';
import {useState} from 'react';

const User = ()=>{
  
  const [users, setUsers] = useState([]);
 
  return (
    <div>
      <title>Home</title>
      <div className="App">
        <Search setUsers = {setUsers} />
        <List users={users} setUsers ={setUsers} />
      </div>   
    </div>
  )
}

export default User;