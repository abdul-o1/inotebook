import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style.css";



const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      props.showAlert("logged in succesfully", "success");
      Navigate("/");
    } 
    else {
      props.showAlert("Invalid details ", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    

    <div className ="container-1">
	<div className ="screen-1">
       
		<div className ="screen__content-1">
			<form  onSubmit={handleSubmit} className ="login-1">
        <h3 style={{color: "#7875B5"}}>LOGIN</h3>
				<div className ="login__field-1">
					<i className ="login__icon-1 fas fa-user"></i>
          <input
            type="email" 
            className ="login__input-1" placeholder="User name / Email"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
				</div>
				<div className ="login__field-1">
					<i className ="login__icon-1 fas fa-lock"></i>
					<input
          
            type="password"
            className ="login__input-1" placeholder="Password"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
				</div>
				<button className ="button login__submit-1">
					<span className ="button__text">submit </span>
					<i className ="button__icon-1 fas fa-chevron-right"></i>
				</button>				
			</form>
			
		</div>
		<div className ="screen__background-1">
			<span className ="screen__background__shape-1 screen__background__shape4-1"></span>
			<span className ="screen__background__shape-1 screen__background__shape3-1"></span>		
			<span className ="screen__background__shape-1 screen__background__shape2-1"></span>
			<span className ="screen__background__shape-1 screen__background__shape1-1"></span>
		</div>		
	</div>
</div>
  );
};

export default Login;
