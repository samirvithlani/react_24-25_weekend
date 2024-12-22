import React from "react";
import { Link } from "react-router-dom";

export const NetflixDashboard = () => {
  return (
    <div>
      <h1>Netflix Dashboard</h1>
      <ul>
        <li>
          <Link to="/aboutnetflix">About Netflix</Link>
        </li>
        
        <li>
          <Link to="/dashboard/contactnetflix">Contact Netflix</Link>
        </li>
        <li>
          <Link to="contactnetflix">Contact Netflix</Link>
        </li>
      </ul>
    </div>
  );
};
