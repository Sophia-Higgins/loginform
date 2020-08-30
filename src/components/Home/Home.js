import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";
import axios from "axios";

const Home = () => {
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/verifyToken", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN_NAME),
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          redirectToLogin();
        }
      })
      .catch(() => {
        redirectToLogin();
      });
  });

  function redirectToLogin() {
    history.push("/login");
  }

  return (
    <div className="body">
      <br />
      <h1 className="display-1 text-center text-primary">
        Welcome {location.state.username}! <br /> Everything is fine.
      </h1>
    </div>
  );
};

export default Home;
