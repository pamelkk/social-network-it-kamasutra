import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavbarItem.module.css";

const NavbarItem = (props) => {
  return (
    <li className={classes.item}>
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? "active" : "")}
        style={({ isActive }) => {
          return {
            color: isActive ? "#ff8b9e" : "",
          };
        }}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
