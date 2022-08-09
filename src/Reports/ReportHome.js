import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AssignOpenIssue from "./components/AssignOpenIssue";
import Detail from "./components/Detail";
import Report from "./components/Report";



const ReportHome=()=> {
  
  return (
    <div>
      <nav className="navbar navbar-expand navbar-blue bg-blue">
        
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/report/summary"} className="nav-link">
              Issue Summary by report
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/report/assign"} className="nav-link">
              Assign Open Issue
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/report/targetresolutiondates"} className="nav-link">
              Target Resolation Date
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/report/avaragedates"} className="nav-link">
              Average Dates to Resolve
            </Link>
          </li>
          

        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
         
          <Route path="/summary" element={<AssignOpenIssue/>} />
          <Route path="/assign" element={<AssignOpenIssue/>} />
          <Route path="/targetresolutiondates" element={<AssignOpenIssue/>} />
          <Route path="/avaragedates" element={<AssignOpenIssue/>} />
          <Route path="/issueresolvedbymonth" element={<AssignOpenIssue/>} />
          <Route path=":id" element={<AssignOpenIssue/>} />
          
        </Routes>
      </div>
    </div>
  );
}

export default ReportHome;
