import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../../constants/apiConstants";

function Home(props) {
  useEffect(() => {
    axios
      .get(API_BASE_URL + "/verifyToken", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN_NAME),
        },
      })
      .then(response => {
        if (response.status !== 200) {
          redirectToLogin();
        }
      })
      .catch(() => {
        redirectToLogin();
      });
  })

  function redirectToLogin() {
    props.history.push("/login");
  }

  return (
    <div className="body">
      <br />
      <h1 className="display-1 text-center text-primary">
        Welcome {props.location.state.username}!
      </h1>
      <h1 className="display-1 text-center text-primary">
        Everything is fine.
      </h1>
    </div>
  );
}

export default withRouter(Home);
