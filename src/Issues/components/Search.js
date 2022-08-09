import IssueDataService from "../../services/IssueDataService";
import { useState, useEffect} from "react";

const Search = ({setIssues})=> {

  const [projectId, setProjectId] = useState(-1);
  const createdBy="melody";
  console.log('project name ===='+ projectId);
 
  async function findIssuesByCreatedBy() {
    console.log("find all findIssuesByCreatedBy name");
    try {
      const resp = await IssueDataService.findIssuesByCreatedBy(createdBy);
      setIssues(resp.data);
      console.log("setIssues inside");
    } catch (err) {
      console.error(err);
    }
  }

  function relatedProjectChange(e) {
   
    setProjectId(e.target.value);
      
  }

 
    function findIssueByProjectId(){

      console.log('findbysetProjectId:::'+ projectId);
      if(projectId!==-1)
      {
        IssueDataService.findIssuesByProjectId(projectId)
        .then(response => {
          setIssues(response.data);

          console.log("find by project name==="+ projectId);
         
        })
        .catch(e => {
          console.log(e);
        });
      }else {
        console.log("project name is empty");
        findIssuesByCreatedBy(createdBy);
      }
        
    }

    return (
      
     <div className="col-md-8">
        <div className="input-group mb-3">
        <select
              value={projectId}

              onChange={relatedProjectChange}
            >
              <option value='20'>melody Project</option>
              <option value="10">Product Project</option>
              <option value="2">customer management</option>
        </select>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findIssueByProjectId}
            >
              Search
            </button>
          </div>


        </div>

      </div>
    );


}

export default Search;