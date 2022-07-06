import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  return <div className={classes.dialog}>
    <div className={classes.message}>{props.message}</div>
    <img src="https://i.pinimg.com/236x/ed/0e/6e/ed0e6e3750115d9b9009deb0650b0086--cat-s-kitty-cats.jpg?nii=t" width="70" height="70" alt="profile photo" className={classes.img}></img>
  </div>;
};

export default Message;
