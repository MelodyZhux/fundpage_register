import {Link } from "react-router-dom";

const Item = ({item})=> {

  console.log('item detail' + item.id);

  var sDate= item.startDate;
  console.log("sdate===="+sDate);
   
      return (
        
        <tr>
            <td>{item.projectName} </td>
            <td>{item.startDate}</td>
            <td>{item.targetEndDate}</td>
            <td><Link to={"/project/" + item.projectId} id={item.projectId} className="badge badge-warning" >
                  Detail
                </Link>

            </td>
        </tr>
    )
  
  }
  export default Item;