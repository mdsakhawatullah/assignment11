import React, { createContext, useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Order from './Components/Dashboard/Order/Order';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import ReviewPost from './Components/Dashboard/ReviewPost/ReviewPost';
import AddService from './Components/Dashboard/AddService/AddService';
import ServiceAdmin from './Components/Dashboard/ServiceAdmin/ServiceAdmin';
import ContactForm from './Components/Home/ContactForm/ContactForm';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/serviceRegister/:serviceId">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>>
          </PrivateRoute>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <Route path="/serviceRegister/:serviceId">
          <Order></Order>
            </Route>  */}
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/contact">
           <ContactForm></ContactForm>

          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/serviceAdmin">
            <ServiceAdmin></ServiceAdmin>
            </Route>
            
          <Route path="/reviewPost">
            <ReviewPost></ReviewPost>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
