import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHdd,
  faComments,
  faPlus,
  faCog,
  faSignOutAlt,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
  faList,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";
import './Sidebar.css'; 
import { HashLink } from "react-router-hash-link";



const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

useEffect(() => {
  fetch("https://polar-springs-72792.herokuapp.com/isAdmin", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: loggedInUser.email }),
  })
    .then((res) => res.json())
    .then((data) => setIsAdmin(data));
}, []);


  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <Link to="/">
          <img className="img-fluid" src={logo} alt=""/>
          
        </Link>

        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        {isAdmin ? (
          <div>
            <li>
              <Link to="/serviceAdmin" className="text-white">
                <FontAwesomeIcon icon={faList} />{" "}
                <span>All Services</span>
              </Link>
            </li>
            <li>
              <Link to="/addService" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
            <li>
              <Link to="/deleteservice" className="text-white">
                <FontAwesomeIcon icon={faTrash} /> <span>Delete Service</span>
              </Link>
            </li>
              <Link to="/addAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add An Admin</span>
              </Link>
            </li>
            
          </div>
         ) : ( 
          <div>
            <li>
              <HashLink to="/#services" className="text-white">
                <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
              </HashLink>
            </li>
            <li>
              <Link to="/serviceList" className="text-white">
                <FontAwesomeIcon icon={faHdd} /> <span>Service List</span>
              </Link>
            </li>
            <li>
              <Link to="/reviewPost" className="text-white">
                <FontAwesomeIcon icon={faComments} /> <span>Review</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

