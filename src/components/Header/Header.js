import React from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from "../../constants/apiConstants";

function Header() {
  let history = useHistory();
  let location = useLocation();

  const homePath = ["/home", "/account", "/application", "/payment"];

  function renderLogout() {
    if (homePath.includes(location.pathname)) {
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
    history.push("/login");
  }

  function renderAccountLink() {
    if (homePath.includes(location.pathname)) {
      return (
        <Link className="nav-link text-white" to="/account">
          Account
        </Link>
      );
    }
  }

  function renderApplicationLink() {
    if (homePath.includes(location.pathname)) {
      return (
        <Link className="nav-link text-white" to="/application">
          Application
        </Link>
      );
    }
  }

  function renderPaymentLink() {
    if (homePath.includes(location.pathname)) {
      return (
        <Link className="nav-link text-white" to="/payment">
          Payment
        </Link>
      );
    }
  }

  return (
    <nav className="navbar navbar-dark bg-primary d-flex">
      <div className="row col-sm justify-content-center text-white">
        <span className="h3">The Good Place</span>
      </div>
      <div className="row col-sm justify-content-center text-white">
        {renderAccountLink()}
      </div>
      <div className="row col-sm justify-content-center text-white">
          {renderApplicationLink()}
      </div>
      <div className="row col-sm justify-content-center text-white">
          {renderPaymentLink()}
      </div>
      <div className="row col-sm justify-content-end">{renderLogout()}</div>
    </nav>
  );
}
export default Header;
