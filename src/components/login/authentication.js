const auth = (useremail, userpassword) => {
    const validEmail = "dhruv@ihd.in";
    const validPassword = "dhruv@ihd";
    
    try {
      if (useremail === validEmail) {
        if (userpassword === validPassword) {
            window.localStorage.setItem("isLoggedIn", "true");
          return true;
        } else {
          alert("Wrong password");
          return false;
        }
      } else {
        alert("Wrong email");
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };
  
  export default auth;