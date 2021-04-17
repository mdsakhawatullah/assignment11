import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
    overflow: "hidden",
  };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>

      <div className="col-md-10 p-4 pr-5 ml-auto">
        <div>
          <center>
            <p
              style={{ fontSize: 60, fontWeight: 700 }}
              className="mt-5 text-center"
            >
              Welcome to Dashboard, {loggedInUser.name}
            </p>
            <p>Explore from the Dashboard</p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;