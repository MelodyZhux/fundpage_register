import Item from './Item';

import {Table} from 'react-bootstrap';


const List = ({issues})=>{

  return (

   <div>
      <Table striped  bordered hover variant="">
      <thead>
          <tr>
            <td>issue Name</td>
            <td>issue related project</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            issues.map(
              (item) => {
                
                return(
                  
                  <Item item={item} key = {item.id} />
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