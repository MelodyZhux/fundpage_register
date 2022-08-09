import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Detail from "./components/Detail";
import Project from "./components/Project";
import Edit from "./components/Edit";


const ProjectHome=()=> {
  
  return (
    <div>
      <nav className="navbar navbar-expand navbar-blue bg-blue">
        
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/project/search"} className="nav-link">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/project/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Project/>} />
          <Route path="/search" element={<Project/>} />
          <Route path="/add" element={<Edit/>} />
          <Route path=":id" element={<Detail/>} />
          <Route path="*" element={<p>Can not find pages</p>} />

        </Routes>
      </div>
    </div>
  );
}

export default ProjectHome;
