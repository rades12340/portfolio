import React from "react";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    fontSize: "2.5em",
    display: "grid",
    placeItems: "center",
    textAlign: "center"
  },
  social: { margin: "0.3em 0", background: "#E9F5EC", color: "#4da137" }
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <div style={{ background: "#E9F5EC" }}>
      <Container className={classes.container}>
        <div className={classes.social}>
          <i
            className="fab fa-facebook-square"
            style={{ marginRight: "0.5em" }}
          ></i>
          <i className="fab fa-linkedin"></i>
        </div>

        <Typography variant="body2" gutterBottom>
          Terms
        </Typography>
        <Typography variant="body2" gutterBottom>
          Privacy
        </Typography>
        <Typography variant="body2" gutterBottom>
          All rights reserved - Copyright © {new Date().getFullYear()} website
          by Daryl Tavernor
        </Typography>
      </Container>
    </div>
  );
};

export default Contact;
