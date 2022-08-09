import Item from './Item';

import {Table} from 'react-bootstrap';


const List = ({users} )=>{

  return (

   <div>
      <Table striped  bordered hover variant="">
      <thead>
          <tr>
            <td>Person's Name</td>
            <td>Person's Role </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            users.map(
              (item) => {
                
                return(
                  
                  <Item item={item} key = {item.personId} />
                )
                
              }
            )
          }


         </tbody>
      </Table>   
    
  </div>
  )
}

export default List;