import { Link } from "react-router-dom";

const Item = ({ item }) => {
  console.log("item detail" + item.id);

  return (
    <tr>
      <td>{item.issueSummary} </td>
      <td>{item.relatedProject}</td>
      <td>{item.status}</td>
      <td>{item.issueId}</td>

      <td>
        <Link
          to={"/issue/" + item.issueId}
          id={item.issueId}
          className="badge badge-warning"
        >
          Detail
        </Link>
      </td>
    </tr>
  );
};
export default Item;
