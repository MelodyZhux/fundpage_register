import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import ProjectDataService from "../../services/ProjectDataService";


const Detail = props => {
  
  const { id }= useParams();
  let navigate = useNavigate();
  
  const initialProjectState = {
    projectName: "",
    projectId: -1,
    startDate: "",
    targetEndDate: null,
    createdOn:null,
    createdBy:'',
    modifiedOn:null,
    modifiedBy:''
  };

  console.log("id ====" +id);
  console.log('step1');
  const [currentProject, setCurrentProject] = useState(initialProjectState);
  const [message, setMessage] = useState("");
  console.log(currentProject);
  console.log('step2');
  const getProject = id => {
    console.log("getProject id==="+id);
    ProjectDataService.findByProjectId(id)
      .then(response => {

        console.log("response.dataddddddddddddddddddddddddddddddd");
        console.log(response.data);
        setCurrentProject(response.data); 

      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log("view-------"+id);
   
      getProject(id);

      console.log('project is ');
      console.log(currentProject);
  }, [id]);
 console.log('out');
    function nameChange(e) {
        setCurrentProject({ ...currentProject, projectName:e.target.value})
    }

    function startDateChange(e) {
        
        setCurrentProject({ ...currentProject, startDate:e.target.value})
    }


    function targetEndDateChange(e) {
        
      setCurrentProject({ ...currentProject, targetEndDate:e.target.value})
  }


   function updateProject() {
        console.log("updated");
        console.log(currentProject);
        setCurrentProject({ ...currentProject, modifiedBy:'Daniel'})
        ProjectDataService.update(id, currentProject)
        .then(response => {
            console.log(response.data);
            setMessage("The Project was updated successfully!");
        })  
        .catch(e => {
            console.log(e);
        });
    };

  const deleteProject = () => {
    alert('delete');
    ProjectDataService.remove(currentProject.projectId)
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
      {currentProject ? (
        <div className="edit-form">
          <h4>Project</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                defaultValue={currentProject.projectName}
                onChange={nameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                name="startDate"
                defaultValue={currentProject.startDate}
                key={currentProject.startDate}
                onChange={startDateChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Target End Date</label>
              <input
                type="date"
                className="form-control"
                id="targetEndDay"
                name="targetEndDay"
                defaultValue={currentProject.targetEndDate}
                onChange={targetEndDateChange}
                
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="date">Created on</label>
              <input
                type="date"
                className="form-control"
                id="createdOn"
                name="createdOn"
                defaultValue={currentProject.createdOn}
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
                defaultValue={currentProject.createdBy}
                readOnly
              />
            </div>
          
          </form>
          <button
            type="submit"
            className="badge badge-success"
            onClick={updateProject}
          >
            Update
          </button>
          <button className="badge badge-danger mr-2" onClick={deleteProject}>
            Delete
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Project...</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
