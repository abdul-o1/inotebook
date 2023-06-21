import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = (props) => {

  const [credentials, setCredentials] = useState({name: "" , email: "", password: "" , cpassword :""}) 

  let Navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

      const {name, email ,password} = credentials;

      const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, email, password})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
          // Save the auth token and redirect
          localStorage.setItem('token', json.authtoken); 
          Navigate("/");
          props.showAlert("Account created succesfully ","success");

      }
      else{
          props.showAlert("Invalid Credentials ","danger");
      }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }


  return (
    <div className="container mt-2">
      <h2 className="my-3">Signup to  use Inotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            minLength={5}
            required 
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
           Confirm Password
          </label>
          <input type="password" className="form-control" id="cpassword" name="cpassword"
          onChange={onChange} />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
