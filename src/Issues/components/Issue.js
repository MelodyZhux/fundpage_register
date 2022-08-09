import Search from './Search';
import List from './List';
import IssueDataService from "../../services/IssueDataService";
import {useState, useEffect} from 'react';


async function findAll(setIssues) {
  console.log("find all project list");
  try {
    const resp = await IssueDataService.getAll();
    console.log(resp.data);
    setIssues(resp.data);
    console.log("findall inside");
  } catch (err) {
    console.error(err);
  }
}


const Issue = ()=>{
  
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    console.log("useEffect running");
    findAll(setIssues);
  }, []);
  
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