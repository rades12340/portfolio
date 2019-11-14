import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import UiContext from "../context/uiContext";

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
  navigation: {
    display: "none",
    ["@media (min-width:890px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "block"
    }
  },
  navigation1: {
    display: "none",
    ["@media (max-width:890px)"]: {
      // eslint-disable-line no-useless-computed-key
      display: "block"
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const uiContext = useContext(UiContext);

  const { toggleDrawer } = uiContext;

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Container>
          <Toolbar className={classes.header} disableGutters={true}>
            <img
              src="/onlinemarketingconsultant-stoke-on-trent.png"
              onClick={() => console.log("onClick")}
              alt="onlinemarketingconsultant-stoke-on-trent"
            />

            <div className={classes.navigation}>
              <Button color="inherit">About me</Button>
              <Button color="inherit">Marketing Services</Button>
              <Button color="inherit">Testimonials</Button>
              <Button color="inherit">Get in touch</Button>
              <Button color="inherit">Get in touch</Button>
            </div>
            <div className={classes.navigation1}>
              <Button onClick={toggleDrawer("right", true)}>Open Right</Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
