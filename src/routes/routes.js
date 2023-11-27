import React from 'react'
import Login from '../components/login/login';
import Admin from '../components/admin/admin';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";

const MyRoutes = () => {
    const isLoggedIn = window.localStorage.getItem('isLoggedIn') === 'true';
  return (
    <Router>
    <div className="App">
    <Routes>
          <Route path="/"
            element={isLoggedIn ? <Navigate to="/admin" /> : <Login />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route
            path="/admin"
            element={<Admin />}
          />
        
        </Routes>
    </div>
    </Router>
  )
}

export default MyRoutes
