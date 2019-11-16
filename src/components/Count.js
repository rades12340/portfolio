import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em",
    width: "300px"
  },
  logo: {
    position: "relative",
    padding: "0.3em",
    height: "40%"
  },
  value: {
    position: "relative",
    height: "20%",
    fontSize: "2em",
    fontWeight: 900,
    padding: "0.3em"
  },
  header1: {
    height: "40%",
    textAlign: "center"
  }
}));

const Count = ({ logo, value, text }) => {
  const classes = useStyles();
  return (
    <>
      <CountUp end={value} prefix="+" redraw={true}>
        {({ countUpRef, start }) => (
          <div className={classes.container}>
            <img src={logo} alt="" className={classes.logo} />
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} className={classes.value} />
            </VisibilitySensor>
            <Typography variant="h6" className={classes.header1}>
              {text}
            </Typography>
          </div>
        )}
      </CountUp>
    </>
  );
};

export default Count;
