import React from "react";
import classes from './Application.module.css';
import {NavLink} from "react-router-dom";

const Application = (props) => {
  return (
      <li className={classes.item + " " + classes.active}>
        <NavLink to={props.link}><img src={props.img} width="150" height="150" alt="app preview" className={classes.img}></img>
          <h2>{props.name}</h2></NavLink>
      </li>
  );
};

export default Application;
