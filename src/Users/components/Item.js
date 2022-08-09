import {Link } from "react-router-dom";

const Item = ({item})=> {

  console.log('item detail' + item.id);
        return (
        
        <tr>
            <td>{item.personName} </td>
            <td>{item.personRole}</td>
            <td><Link to={"/people/" + item.personId} id={item.personId} className="badge badge-warning" >
                  Detail
                </Link>

            </td>
        </tr>
    )
  
  }
  export default Item;