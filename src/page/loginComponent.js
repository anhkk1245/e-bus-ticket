
import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useHistory } from "react-router";
import { Hint } from "react-autocomplete-hint";


function Login(props) {
  let hintData = ["anhkk1245@gmail.com", "ntd@gmail.com", "setU@gmail.com"];
  const initialState = {
    email: "",
    password: "",
  };

  const [{ email, password }, setState] = useState(initialState);

  const history = useHistory();

  const handelOnChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
    AuthService.login(email, password).then((res) => {
      if (res.success) {
        console.log("signed in");
        history.push({
          pathname: "/home",
          userDetail: JSON.stringify(res.message),
        });
      }
    });
  };

  return (
    <form onSubmit={handelSubmit}>
      <h3>Log in</h3>

      <div className="form-group">
        <label>Email</label>
        <Hint options={hintData} allowTabFill>
          <input
            onChange={handelOnChange}
            value={email}
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </Hint>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          onChange={handelOnChange}
          value={password}
          id="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Sign in
      </button>

      <p className="forgot-password text-right">
        Don't have account? <a href="sign-up">Sign Up</a>
      </p>

      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}

export default Login;
