import PeopleDataService from "../../services/PeopleDataService";
import { useEffect, useState } from "react";

const Search = ({setUsers})=> {


  const [peopleName, setPeopleName] = useState("");
    
    function onChangeSearchName (e){
        
      setPeopleName(e.target.value);
    } 


    useEffect(() => {
      console.log('useEffect running');
      
      findAll();
      
  }, []);

  function findAll() {

    console.log('find all project list');
    PeopleDataService.getAll()
    .then(response => {
      setUsers(response.data);
     
    })
    .catch(e => {
      console.log(e);
    });
  }

  function findPeopleByName(){

    console.log('findPeopleByName:::'+ peopleName);
    if(peopleName!=="" && typeof(peopleName)!=='object')
    {
      PeopleDataService.findByPersonName(peopleName)
      .then(response => {
        setUsers(response.data);

        console.log("find by people name==="+ peopleName);
       
      })
      .catch(e => {
        console.log(e);
      });
    }else {
      console.log("project name is empty");
      findAll();
    }
      
  }

    return (
     <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findPeopleByName}
            >
              Search
            </button>
          </div>


        </div>

      </div>
    );


}

export default Search;