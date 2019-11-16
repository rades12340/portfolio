import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2em 0"
  },
  img: {
    width: "128px",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "65px"
    }
  }
}));

const Clients = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "#B8EFC6" }}>
      <Container className={classes.container}>
        <img
          src="/Stoke-on-trent-marketing-consultant-partner1.png"
          alt=""
          className={classes.img}
        />
        <img
          src="/Stoke-on-trent-marketing-consultant-partner2.jpg"
          alt=""
          className={classes.img}
        />
        <img
          src="/Stoke-on-trent-marketing-consultant-partner3.png"
          alt=""
          className={classes.img}
        />
        <img
          src="/Stoke-on-trent-marketing-consultant-partner4.png"
          alt=""
          className={classes.img}
        />
      </Container>
    </div>
  );
};

export default Clients;
