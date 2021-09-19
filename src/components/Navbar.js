import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { resetAuthedUser } from "../actions/authedUser";
import { useLocation } from "react-router";

const Navbar = ({ user, dispatch }) => {
  const location = useLocation();
  console.log("===================");

  console.log(location);
  console.log("===================");
  const LogOut = () => {
    dispatch(resetAuthedUser());
  };

  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "New Question",
      path: "/add",
    },
    {
      id: 3,
      name: "Leaderboard",
      path: "/leaderboard",
    },
  ];
  return (
    <Fragment>
      <nav className="navbar bg-light navbar-light border justify-content-around">
        <ul className="navbar-nav flex-row ">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ml-2 item-nav ${
                location.pathname === item.path ? "bg-warning" : null
              }`}
            >
              <Link className="nav-link text-dark" to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center">
          <div className="dropdown ">
            <button
              className="btn dropdown-toggle d-flex align-items-center justify-content-center"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
            >
              <img
                src={user.avatarURL}
                alt="user-avatar"
                className="avatar-icon mx-3"
              />
              Hello {user.name}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button
                type="button"
                onClick={LogOut}
                className="btn btn-danger dropdown-item"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(Navbar);
