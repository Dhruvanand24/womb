import React, { useEffect } from 'react'
import Login from '../components/login/login';
import Admin from '../components/admin/admin';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import Roles from '../components/roles/roles';

const MyRoutes = () => {

  return (
    <Router>
    <div className="App">
    <Routes>
          <Route path="/"
            element={(window.localStorage.getItem("isLoggedIn")==="true")?(<Navigate to="/admin" />):<Login /> } />
         
          <Route
            path="/admin"
            element={<Admin />}
          />
          
          <Route
            path="/rolemanagement"
            element={<Roles />}
          />
        
        </Routes>
    </div>
    </Router>
  )
}

export default MyRoutes
