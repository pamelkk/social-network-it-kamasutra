import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://kidpassage.com/images/publications/detskie-marshrutyi-venetsiya/detskie-marshrutyi-venetsiya-photo1_997568869.jpg"
          height="300"
          width="991"
          alt="wall"
        ></img>
      </div>
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
