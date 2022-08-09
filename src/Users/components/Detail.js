import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import PeopleDataService from "../../services/PeopleDataService";


const Detail = props => {
  
  const { id }= useParams();
  let navigate = useNavigate();
  
  const initialPeopleState = {
    personId:-1,
    personName: "",
    personEmail:"",
    personRole: "",
    userName:"",
    assignedProject:-1,
    createdOn:null,
    createdBy:"",
    modifiedOn:null,
    modifiedBy:""
  };

  console.log("id ====" +id);
  const [currentPeople, setCurrentPeople] = useState(initialPeopleState);
  const [message, setMessage] = useState("");
  console.log(currentPeople);
 
  const getPeople = id => {
    console.log("getPeople id==="+id);
    PeopleDataService.findByPersonId(id)
      .then(response => {

        console.log("response.dataddddddddddddddddddddddddddddddd");
        console.log(response.data);
        setCurrentPeople(response.data); 
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log("view-------"+id);
    getPeople(id);
    console.log('find a user');

  }, [id]);

  function personNameChange(e) {
    
    setCurrentPeople({ ...currentPeople, personName: e.target.value })
  }

  function personEmailChange(e) {
    
    setCurrentPeople({ ...currentPeople, personEmail: e.target.value })
  }

  function personRoleChange(e) {
    
    setCurrentPeople({ ...currentPeople, personRole: e.target.value })
  }
  
  function userNameChange(e) {
    
    setCurrentPeople({ ...currentPeople, userName: e.target.value })
  }

  function assignedProjectChange(e) {
    console.log('assinged pROJECT NUMBER===='+currentPeople.assignedProject);
    console.log('assinged pROJECT NUMBER 2===='+e.target.value);
    setCurrentPeople({ ...currentPeople, assignedProject: e.target.value })
   
    console.log('assinged pROJECT NUMBER===='+ currentPeople.assignedProject);
  }

   function updatePeople() {
        console.log("updated");
        console.log(currentPeople);
        setCurrentPeople({ ...currentPeople, modifiedBy:'Daniel'})
        console.log(currentPeople.modifiedBy);
        PeopleDataService.update(id, currentPeople)
        .then(response => {
            console.log(response.data);
            setMessage("The Project was updated successfully!");
        })  
        .catch(e => {
            console.log(e);
        });
    };

  const deletePeople = () => {
    alert('delete');
    PeopleDataService.remove(currentPeople.personId)
      .then(response => {
        console.log(response.data);
        navigate("/project/search");
        setMessage("The Project was deleted successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

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
                defaultValue={currentPeople.personName}
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
                defaultValue={currentPeople.personEmail}
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
                defaultValue={currentPeople.personRole}
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
                defaultValue={currentPeople.userName}
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
                defaultValue={currentPeople.assignedProject}
                key={currentPeople.assignedProject}
                onChange= {assignedProjectChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Created on</label>
              <input
                type="text"
                className="form-control"
                id="createdOn"
                name="createdOn"
                defaultValue={currentPeople.createdOn}
                readOnly
               
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Created By</label>
              <input
                type="text"
                className="form-control"
                id="createdBy"
                name="createdBy"
                defaultValue={currentPeople.createdBy}
                readOnly
              />
            </div>
            
          </form>
          <button
            type="submit"
            className="badge badge-success"
            onClick={updatePeople}
          >
            Update
          </button>
          <button className="badge badge-danger mr-2" onClick={deletePeople}>
            Delete
          </button>
          <p>{message}</p>
         
        </div>
       
        </div>
	  
  );
};

export default Detail;
