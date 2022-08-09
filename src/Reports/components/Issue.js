import Search from './Search';
import List from './List';
import {useState} from 'react';

const Issue = ()=>{
  const [issues, setIssues] = useState([]);
 
  return (
    <div>
      <title>Home</title>
      <div className="App">
        <Search setIssues = {setIssues} />
        <List issues={issues} setIssues ={setIssues} />
      </div>   
    </div>
  )
}

export default Issue;