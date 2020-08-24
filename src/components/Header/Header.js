import React from "react";
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from "../../constants/apiConstants";

function Header(props) {
  function renderLogout() {
    if (props.location.pathname === "/home") {
      return (
        <div>
          <button className="btn btn-light" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      );
    }
  }

  function handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    props.history.push("/login");
  }

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="col-sm" />
      <div className="row col-sm d-flex justify-content-center text-white">
        <span className="h3">The Good Place</span>
      </div>
      <div className="row col-sm d-flex justify-content-end">
        {renderLogout()}
      </div>
    </nav>
  );
}
export default withRouter(Header);
