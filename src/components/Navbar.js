import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  secondaryButton: {
    "&:hover": {
      backgroundColor: "#c4c4c4"
    }
  },
  thernaryButton: {
    "&:hover": {
      backgroundColor: "#939292"
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Container>
          <Toolbar className={classes.header} disableGutters={true}>
            <img
              src="/onlinemarketingconsultant-stoke-on-trent.png"
              onClick={() => console.log("onClick")}
              alt="onlinemarketingconsultant-stoke-on-trent"
            />

            <div>
              <Button color="inherit">About me</Button>
              <Button color="inherit">Marketing Services</Button>
              <Button color="inherit">Testimonials</Button>
              <Button color="inherit" className={classes.secondaryButton}>
                Get in touch
              </Button>
              <Button color="inherit" className={classes.thernaryButton}>
                Get in touch
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
