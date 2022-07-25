import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={classes.dialogItem + " " + classes.active}>
      <img src={props.src} width="80" height="80" alt="profile pic" className={classes.img}></img>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
