import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Admin = () => {
    const navigate = useNavigate();
    const logout = ()=> {
        window.localStorage.setItem("isLoggedIn", "false");
        navigate("/");

    }
  return (
    <div>
      <Sidebar/>
    </div>
  )
}

export default Admin
