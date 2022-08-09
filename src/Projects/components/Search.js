import projectDataService from "../../services/ProjectDataService";
import { useState } from "react";


const Search = ({ setProjects }) => {
  const [projectName, setProjectName] = useState("");

  console.log("init projectName===" + projectName);

  async function findByProjectName() {
    console.log("find all project name");
    try {
      const resp = await projectDataService.findByProjectName(projectName);
      setProjects(resp.data);
      console.log("findall inside");
    } catch (err) {
      console.error(err);
    }
  }

  function onChangeSearchName(e) {
    setProjectName(e.target.value);
  }

  console.log("project name ====" + projectName);

  return (
    <div className="col-md-8">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          id="projectName"
          name="projectName"
          onChange={onChangeSearchName}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByProjectName}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
