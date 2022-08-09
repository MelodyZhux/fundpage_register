import React from 'react';
import {useState} from 'react';

import IssueDataService from "../../services/IssueDataService";



const Edit = ()=> {

  const [issue, setIssue] = useState({
    issueSummary:'',
    issueDescription:'',
    identifiedByPersonId:-1,
    identifiedDate: null,
    relatedProject:-1,
    priority:'',
    targetResolutionDate: null,
    createdBy:'Melody'
  });


  const [responseMessage,setResponseMessage] = useState("")
 
  function issueSummaryChange(e) {

    setIssue({ ...issue, issueSummary: e.target.value })
  }

  function issueDescriptionChange(e) {
   
    setIssue({ ...issue, issueDescription: e.target.value })
  }

  function identifiedByPersonNameChange(e) {
   
    var personId =parseInt(e.target.value);

     setIssue({ ...issue, identifiedByPersonId: personId })
     
  }
  
  function identifiedDateChange(e) {
   
    setIssue({ ...issue, identifiedDate: e.target.value })
  }

  function relatedProjectChange(e) {

    var projectId= parseInt(e.target.value);
   
    setIssue({ ...issue, relatedProject: projectId })
  }


  function priorityChange(e) {
   
    setIssue({ ...issue, priority: e.target.value })
  }
  function targetResolutionDateChange(e) {
   
    setIssue({ ...issue, targetResolutionDate: e.target.value })
  }


  function addIssue(){
    console.log("add issue");
    console.log(issue);
    IssueDataService.create(issue)
      .then(response => {
        console.log("response::" + issue.issueSummary);
        setResponseMessage(response.data);
        
        console.log('issuedataservice');

        setResponseMessage("create a new issue");
        
      })
      .catch(e => {
        console.log(e);
        setResponseMessage("fail to create");
      })
  } 

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
              onChange={issueDescriptionChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="identifiedByPersonId">Identified By: </label>
            <select name="identifiedByPersonId"
              onChange={identifiedByPersonNameChange}
            >
              <option value="none" selected disabled hidden>Select an Option</option>
              <option value="2" >Daniel</option>
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
              onChange={identifiedDateChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="relatedProject">Related Project </label>
            <select name="relatedProject"
              
              onChange={relatedProjectChange}
            >
              <option value="none" selected disabled hidden>Select an Option</option>
              <option value="20" >melody Project</option>
              <option value="10">Product Project</option>
              <option value="2">customer management</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="priority">priority </label>
            <select name="priority"
              onChange={priorityChange}
            >
              <option value="none" selected disabled hidden>Select an Option</option>
              <option value="urgent" selected>urgent</option>
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
              onChange={targetResolutionDateChange}
            />
          </div>


        </form>
        <button
          type="submit"
          className="badge badge-success"
          onClick={addIssue}
        >
          Submit
        </button>
        <p>{responseMessage}</p>
      </div>
    </div>
  );
}

export default Edit;