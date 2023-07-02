import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = (props) => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      Navigate("/");
      props.showAlert("Account created succesfully ", "success");

    }
    else {
      props.showAlert("Invalid Credentials ", "danger");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <div className="container">
      <div className="screen">

        <div className="screen__content">
          <form onSubmit={handleSubmit} className="login">
                <h3 style={{color:"#7875B5"}}>SignUp </h3>            
            <div className="login__field">
            <i className="login__icon fas fa-user"></i>
               <input
                type="Name"
                className="login__input" placeholder="Name"                
                onChange={onChange}
                id="email"
                name="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="login__field">

              <i className="login__icon fas fa-user"></i>
              <input
                type="email"
                className="login__input" placeholder="User name / Email"
                
                onChange={onChange}
                id="email"
                name="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input type="password"
                className="login__input" placeholder="Password"
                minLength={5}
                required 
                onChange={onChange}    
                name="password"
                id="password"
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">submit </span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
