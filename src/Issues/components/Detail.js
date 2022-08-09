import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import IssueDataService from "../../services/IssueDataService";

const Detail = (props) => {
  const { id } = useParams();
  console.log("step1");
  console.log("view+++++");
 
  let navigate = useNavigate();
 
  const [initialIssueState, setInitialIssueState] = useState({
    issueSummary: "",
    issueDescription: "",
    identifiedByPersonId: -1,
    identifiedDate: null,
    relatedProject: -1,
    priority: "",
    targetResolutionDate: null,
    createdBy: "",
    createdOn:null,
    modifiedBy:"",
  });
  console.log("step2");
  console.log("id ====" + id);
  const [currentIssue, setCurrentIssue] = useState(initialIssueState);
  console.log("step ddddddddddddd");
  const [message, setMessage] = useState("");
  console.log("step3");
  const getIssue = (id) => {
    console.log("getIssue id===" + id);
    IssueDataService.findByIssueId(id)
    
      .then((response) => {
        console.log("response.dataddddddddddddddddddddddddddddddd");
        console.log("step4");
        console.log(response.data);
        setCurrentIssue(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log("view-------" + id);
    if (id) getIssue(id);
    
  }, [id]);


  function issueSummaryChange(e) {
   
    setCurrentIssue({ ...currentIssue, issueSummary: e.target.value });
  }

  function issueDescriptionChange(e) {
    setCurrentIssue({ ...currentIssue, issueDescription: e.target.value });
  }

  function identifiedByPersonNameChange(e) {

    var personId = parseInt(e.target.value);
    console.log('identifiedByPersonNameChange====' +personId);
    console.log("step6 ----"+ currentIssue.identifiedByPersonId);
    setCurrentIssue({ ...currentIssue, identifiedByPersonId: personId });
    
    console.log('person Id ======='+ currentIssue.identifiedByPersonId);
  }

  function identifiedDateChange(e) {
    setCurrentIssue({ ...currentIssue, identifiedDate: e.target.value });
  }

  function relatedProjectChange(e) {
    var projectId = parseInt(e.target.value);

    setCurrentIssue({ ...currentIssue, relatedProject: projectId });
  }

  function priorityChange(e) {
    setCurrentIssue({ ...currentIssue, priority: e.target.value });
  }
  
  function targetResolutionDateChange(e) {
    setCurrentIssue({ ...currentIssue, targetResolutionDate: e.target.value });
  }

  function updateIssue() {
    console.log("updated");
    console.log(currentIssue);
    setCurrentIssue({ ...currentIssue, modifiedBy: "Melody" });
    IssueDataService.update(id, currentIssue)
      .then((response) => {
        console.log(response.data);
        setMessage("The Issue was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const deleteIssue = () => {
    alert("delete");
    IssueDataService.remove(currentIssue.issueId)
      .then((response) => {
        console.log(response.data);
        navigate("/issue/search");
        setMessage("The Issue was deleted successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div className="edit-form">
        <h4>Creat an Issue</h4>
        <form>
          <div className="form-group">
            <label htmlFor="issueSummary">Issue Summary</label>
            <textarea
              rows="3"
              className="form-control"
              id="issueSummary"
              name="issueSummary"
              defaultValue={currentIssue.issueSummary}
              onChange={issueSummaryChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="issueDescription">Issue description</label>
            <textarea
              rows="8"
              className="form-control"
              id="issueDescription"
              name="issueDescription"
              defaultValue={currentIssue.issueDescription}
              onChange={issueDescriptionChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="identifiedByPersonId">Identified By: </label>
            <select
              name="identifiedByPersonId"
              defaultValue={currentIssue.identifiedByPersonId}
              onChange={identifiedByPersonNameChange}
            >
              <option value="2">Daniel</option>
              <option value="9">John Zhu</option>
              <option value="3">Melody</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Identified Date</label>
            <input
              type="date"
              className="form-control"
              id="identifiedDate"
              name="identifiedDate"
              defaultValue={currentIssue.identifiedDate}
              onChange={identifiedDateChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="relatedProject">Related Project </label>
            <select
              name="relatedProject"
              defaultValue={currentIssue.relatedProject}
              onChange={relatedProjectChange}
            >
             
              <option value="20">melody Project</option>
              <option value="10">Product Project</option>
              <option value="2">customer management</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="priority">priority </label>
            <select
              name="priority"
              defaultValue={currentIssue.priority}
              onChange={priorityChange}
            >
            
              <option value="urgent">urgent</option>
              <option value="high">high</option>
              <option value="medium">medium</option>
              <option value="low">low</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Target Resolution Date</label>
            <input
              type="date"
              className="form-control"
              id="targetResolutionDate"
              name="targetResolutionDate"
              defaultValue={currentIssue.targetResolutionDate}
              onChange={targetResolutionDateChange}
            />
          </div>
          <div className="form-group">
              <label htmlFor="date">Created on</label>
              <input
                type="date"
                className="form-control"
                id="createdOn"
                name="createdOn"
                defaultValue={currentIssue.createdOn}
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
                defaultValue={currentIssue.createdBy}
                readOnly
              />
            </div>
        </form>
        <button
          type="submit"
          className="badge badge-success"
          onClick={updateIssue}
        >
          Update
        </button>
        <button className="badge badge-danger mr-2" onClick={deleteIssue}>
          Delete
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Detail;
