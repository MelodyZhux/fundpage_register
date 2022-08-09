import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import ReportDataService from "../../services/ReportDataService";

const Item = ({ item }) => {
  const [currentIssue, setCurrentIssue] = useState(item);

  function assignedToChange(e) {
    setCurrentIssue({ ...currentIssue, assignedTo: e.target.value });
  }

  function relatedProjectChange(e) {
    setCurrentIssue({ ...currentIssue, relatedProject: e.target.value });
  }

  function statusChange(e) {
    setCurrentIssue({ ...currentIssue, status: e.target.value });
  }

  function priorityChange(e) {
    setCurrentIssue({ ...currentIssue, priority: e.target.value });
  }

  function updateIssue() {
    console.log("updated");
    console.log(currentIssue);
    setCurrentIssue({ ...currentIssue, modifiedBy: "Melody" });

    ReportDataService.update(item.issueId, currentIssue)
      .then((response) => {
        console.log(response.data);
        //    setMessage("The Issue was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <tr>
      <td>{item.issueSummary} </td>
      <td>
        <select name="assignTo" onChange={assignedToChange}>
          <option> Select assigned Person</option>
          <option value="2">Daniel</option>
          <option value="9">John Zhu</option>
          <option value="3">Melody</option>
        </select>
      </td>
      <td>
        <select name="relatedProject" onChange={relatedProjectChange}>
          <option> Select Project</option>
          <option value="20">melody Project</option>
          <option value="10">Product Project</option>
          <option value="2">customer management</option>
        </select>
      </td>
      <td>
        <select name="status" onChange={statusChange}>
          <option> Select status</option>
          <option value="open">open</option>
          <option value="resolved">resolved</option>
          <option value="reopened">reopened</option>
          <option value="close">close</option>
        </select>
      </td>
      <td>
        <select name="priority" onChange={priorityChange}>
          <option>Select Priority</option>
          <option value="urgent">urgent</option>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </td>
      <td>
        <button
          type="submit"
          className="badge badge-success"
          onClick={updateIssue}
        >
          Update
        </button>
      </td>
    </tr>
  );
};
export default Item;
