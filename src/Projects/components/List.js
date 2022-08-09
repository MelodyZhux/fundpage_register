import Item from './Item';

import {Table} from 'react-bootstrap';


const List = ({projects} )=>{

  return (

   <div>
      <Table striped  bordered hover variant="">
      <thead>
          <tr>
            <td>Project Name</td>
            <td>Project Start Day</td>
            <td>Project Target End Day</td>

            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            projects.map(
              (item) => {
                
                return(
                  
                  <Item item={item} key = {item.projectId} />
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