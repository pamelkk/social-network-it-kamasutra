import React from "react";
import classes from './Applications.module.css';
import Application from "./Application/Application";

const Applications = (props) => {
    let state=props.applicationsMenu;
    let applicationsElements = state.apps.map(app => <Application link={app.link} name={app.name} img={app.img} />)
  return (
    <div>
        <ul className={classes.appsList}>
            {applicationsElements}
        </ul>
    </div>
  );
};

export default Applications;
