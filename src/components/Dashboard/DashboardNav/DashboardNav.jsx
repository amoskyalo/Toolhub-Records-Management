import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineReconciliation } from "react-icons/ai";

const DashboardNav = () => {
  return (
    <div className="dashboard-nav">
      <div className="dash-nav-links">
        <Link to="/dashboard">
          <AiOutlineReconciliation />
          Records
        </Link>
      </div>
    </div>
  );
};

export default DashboardNav;
