import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <Fragment>
      <div>
        <ul style={nav}>
          <li>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
const nav = {
  display: "flex",
  listStyleType: "none",
  justifyContent: "space-around"
};
