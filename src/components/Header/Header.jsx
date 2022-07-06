import React from "react";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img className={classes.image}
        src="https://images.wbstatic.net/big/new/14070000/14075022-1.jpg"
        height="90"
        width="75" alt="logo"
      ></img>
      <h1 className={classes.nameCite}>PeTinder</h1>
    </header>
  );
};

export default Header;