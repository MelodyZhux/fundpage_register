import Item from './Item';

import {Table} from 'react-bootstrap';
import ReportDataService from '../../services/ReportDataService';
import { useState, useEffect } from 'react';


const AssignOpenIssue = ()=>{

    const [issues, setIssues] =useState([]);


    function findIssues() {

        console.log('find all project list');
        ReportDataService.getAll()
        .then(response => {
          setIssues(response.data);
         
        })
        .catch(e => {
          console.log(e);
        });
      }

     

      useEffect(() => {
        console.log('useEffect is running');
        
        findIssues();
        
    }, []);

  return (

   <div>
      <Table striped  bordered hover variant="">
      <thead>
          <tr>
            <td>issue Name</td>
            <td>Assiged to</td>
            <td>Related Project </td>
            <td>Status </td>
            <td>Priority </td>
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

export default AssignOpenIssue;