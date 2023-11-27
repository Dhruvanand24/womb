import React, {useState} from 'react'
import styles from "./css/form.module.css"
import auth from "./authentication.js"
import Admin from '../admin/admin.js'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[showPassword, setShowPassword] = useState(false);  
  const[user,setUser] = useState(null);
  const navigate = useNavigate();
  
  const authentication = () => {
    if(email!=='' && password!==''){
    setUser(auth(email,password))}
    else{
      alert("All fields are required");
    }
    
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  if (user) {
    navigate("/admin");
  }
  return (
    <div className={styles.inputcontainer}>
      {/* Top input box with mail icon */}
      <div className={styles.inputgroup}>
        <div className={styles.icon}>
          <img src='/images/mail.png'alt=''></img>
        </div>
        <input type="text"value={email} onChange={(event)=> setEmail(event.target.value)} placeholder="Enter Email Address" />
      </div>

      {/* Bottom input box with key icon on left and eye icon on right */}
      <div className={styles.inputgroup}>
        <div className={styles.icon}>
        <img src='/images/key.png'alt=''></img>
        </div>
        <input
        value={password} onChange={(event)=> setPassword(event.target.value)}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
        />
        <div className={styles.icon} onClick={togglePasswordVisibility}>
        <img src='/images/hide.png'alt=''></img>
        </div>

      </div>
      {/* Forget Password button */}
      <p className={styles.forgetPassword}>Forget Password?</p>

      <div className={styles.loginbtn} onClick={authentication}>Login</div>
    </div>
  )
}

export default Form
