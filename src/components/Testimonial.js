import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative"
  },
  profile: {
    position: "relative",
    padding: "60px 1em 1em",
    backgroundColor: "#E9F5EC",
    width: "300px",
    margin: "1em 0",
    textAlign: "center",
    "&:first-of-type": {
      paddingTop: "2em"
    },
    "@media (max-width: 1100px)": {
      margin: "5em 0 1em",
      // maxWidth: "320px",
      maxWidth: "600px"
    },
    "@media (max-width: 385px)": {
      margin: "5em 0 1em",
      width: "300px"
    }
  },
  user: {
    top: "-80px",
    position: "absolute",
    left: "calc(50% - 64px)",
    border: "10px solid white",
    width: "128px",
    height: "128px",
    borderRadius: "50%"
  },
  quote: {
    lineHeight: 2,
    fontWeight: 400,
    padding: "3em 0.5em 2em",
    "&::after": {
      fontFamily: "Font Awesome 5 Free",
      fontWeight: 900,
      content: '"\f10d"',
      fontSize: "1.5em",
      position: "absolute",
      lineHeight: "1.2em",
      bottom: "-10px",
      right: "-2px"
    },
    "&::before": {
      fontFamily: "Font Awesome 5 Free",
      fontWeight: 900,
      content: '"\f10d"',
      fontSize: "1.5em",
      position: "relative",
      lineHeight: "1.2em",
      bottom: "10px",
      left: "-2px",
      color: "black"
    }
  }
}));

const Testimonial = ({ photo, quote, name, position }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <img src={photo} alt="" className={classes.user} />
        <Typography variant="h6" className={classes.quote}>
          {quote}
        </Typography>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="body1" style={{ color: "#514F4F" }}>
          {position}
        </Typography>
      </div>
    </div>
  );
};

export default Testimonial;
