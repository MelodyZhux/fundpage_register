import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListUser from "./Users/UserHome";
import ListProject from "./Projects/ProjectHome";
import ListIssue from "./Issues/IssueHome";
import ReportHome from "./Reports/ReportHome";
import TutorialsList from "./components/TutorialsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/dashboard"} className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/project"} className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/issue"} className="nav-link">
              Issues
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/report"} className="nav-link">
              Reports
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/user"} className="nav-link">
              User
            </Link>
          </li>
          
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/dashboard" element={<TutorialsList/>} />
          <Route path="/project/*" element={<ListProject/>} />
          <Route path="/issue/*" element={<ListIssue/>} />
          <Route path="/report/*" element={<ReportHome/>} />
          <Route path="/people/*" element={<ListUser/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
