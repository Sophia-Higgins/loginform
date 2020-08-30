import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";
import axios from "axios";

export function LoginForm() {
  let history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
    errorMessage: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      username: state.username,
      password: state.password,
    };
    axios
      .post(API_BASE_URL + "/login", payload)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
          redirectToHome();
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setState((prevState) => ({
            ...prevState,
            errorMessage: "Invalid Username or Password. Please try again.",
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            errorMessage:
              "Something went wrong...Are you sure you belong in The Good Place?",
          }));
        }
      });
  };

  const redirectToHome = () => {
    history.push({
      pathname: "/home",
      state: {
        username: state.username,
      },
    });
  };

  return (
    <div className="card w-50 login-card mt-5 hv-center">
      <div className="card-header bg-primary text-center text-white">
        Please Login
      </div>
      <form>
        <br />
        <div className="form-group col-lg-12 text-left">
          <label htmlFor="exampleUsername">Username</label>
          <input
            type="username"
            className="form-control"
            id="username"
            placeholder="Username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-lg-12 text-left">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
          <br />
          <div
            className="alert alert-danger mt-2"
            style={{ display: state.errorMessage ? "block" : "none" }}
            role="alert"
          >
            {state.errorMessage}
          </div>
          <div className="row justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmitClick}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
