import React from "react";
import classes from "./MeetupDetail.module.css"
const MeetupDetail = (props) => {
  console.log("🚀 ~ MeetupDetail ~ props:", props)
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt=""
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>t{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
