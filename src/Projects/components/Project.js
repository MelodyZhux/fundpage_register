import Search from './Search';
import List from './List';
import projectDataService from "../../services/ProjectDataService";
import {useState, useEffect} from 'react';


async function findAll(setProjects) {
  console.log("find all project list");
  try {
    const resp = await projectDataService.getAll();
    setProjects(resp.data);
    console.log("findall inside");
  } catch (err) {
    console.error(err);
  }
}


const Project = ()=>{
  console.log('setp1');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("useEffect running");
    findAll(setProjects);
  }, []);
  
  return (
    <div>
      <title>Home</title>
      <div className="App">
        <Search  setProjects = {setProjects} />
        <List projects={projects} setProjects ={setProjects} />
      </div>   
    </div>
  )
}

export default Project;