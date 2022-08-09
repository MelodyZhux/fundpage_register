import React from 'react';
import {useState} from 'react';
import PeopleDataService from "../../services/PeopleDataService";



const Edit = ()=> {

  const [user, setUser] = useState({
    personName:'',
    personEmail:'',
    personRole:'',
    userName:'',
    assignedProject:0,
    createdBy:'Melody'
  });
  const [responseMessage,setResponseMessage] = useState("")


  function personNameChange(e) {

    setUser({ ...user, personName: e.target.value })
  }

  function personEmailChange(e) {
   
    setUser({ ...user, personEmail: e.target.value })
  }

  function personRoleChange(e) {
   
    setUser({ ...user, personRole: e.target.value })
  }
  
  function userNameChange(e) {
   
    setUser({ ...user, userName: e.target.value })
  }

  function assignedProjectChange(e) {
   
    setUser({ ...user, assignedProject: e.target.value })
  }


  function addPerson(){
    console.log("add person");
    console.log(user);
    PeopleDataService.create(user)
      .then(response => {
        console.log("response::" + user.userName);
        setResponseMessage(response.data);
        
        console.log('userdataservice');

        setResponseMessage("create a new user");
        
      })
      .catch(e => {
        console.log(e);
        setResponseMessage("fail to create");
      })
  } 

  return (
    <div>
        <div className="edit-form">
          <h4>User</h4>
          <form>
            <div className="form-group">
              <label htmlFor="personName"> Person Name</label>
              <input
                type="text"
                className="form-control"
                id="personName"
                name="personName"
              
                onChange={personNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="personEmail">Person Email</label>
              <input
                type="email"
                className="form-control"
                id="personEmail"
                name="personEmail"
                
                onChange={personEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="personRole">Person Role</label>
              <input
                type="text"
                className="form-control"
                id="personRole"
                name="personRole"
                
                onChange={personRoleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                
                onChange={userNameChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="assignedProject">assigned Project number</label>
              <input
                type="number"
                className="form-control"
                id="assignedProject"
                name="assignedProject"
                
                onChange= {assignedProjectChange}
              />
            </div>
            
          </form>
          <button
            type="submit"
            className="badge badge-success"
            onClick={addPerson}
           >
            Submit
          </button>
          <p>{responseMessage}</p>
       
        </div>
	  </div>
  );
}

export default Edit;