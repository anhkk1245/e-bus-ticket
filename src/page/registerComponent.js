import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useHistory } from "react-router";

function Register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    cfpassword:""
  };

  const [{name, email, password, cfpassword}, setState] = useState(initialState);

  const history = useHistory();

  const handelOnChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      password: password,
      cfpassword: cfpassword
    };
    console.log(userData);
    // AuthService.register(name, email, password, cfpassword ).then((res) => {
    //   if (res.success) {
    //     console.log("signed up");
    //     history.push("/");
    //   }
    // });
  };

  return (
    <form onSubmit={handelSubmit}> 
      <h3>Register</h3>


      <div className="form-group">
        <label>Name</label>
        <input
        onChange={handelOnChange}
          id="name"
          value={name}
          type="text"
          className="form-control"
          placeholder="Name"
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
        onChange={handelOnChange}
          id="email"
          value={email}
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
        onChange={handelOnChange}
          id="password"
          value={password}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <label>Confirm password</label>
        <input
        onChange={handelOnChange}
          id="cfpassword"
          value={cfpassword}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/">log in?</a>
      </p>
    </form>
  );
}

export default Register;
