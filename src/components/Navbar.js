import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import UiContext from "../context/uiContext";
import MenuIcon from "@material-ui/icons/Menu";
import { NavHashLink as NavLink } from "react-router-hash-link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  selected: {
    backgroundColor: "red"
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  navigation: {
    display: "none",
    ["@media (min-width:890px)"]: {
      display: "block"
    }
  },
  navigation1: {
    display: "none",

    ["@media (max-width:890px)"]: {
      display: "block"
    }
  },
  btn: {
    textDecoration: "none",
    color: "black",
    cursor: "pointer"
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const uiContext = useContext(UiContext);

  const { toggleDrawer, openDialog } = uiContext;

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Container>
          <Toolbar disableGutters={true} className={classes.toolbar}>
            <NavLink className={classes.btn} smooth to="#hero">
              <img
                src="/onlinemarketingconsultant-stoke-on-trent.png"
                onClick={() => console.log("onClick")}
                alt="onlinemarketingconsultant-stoke-on-trent"
              />
            </NavLink>

            <div className={classes.navigation}>
              <NavLink className={classes.btn} smooth to="#about">
                <Button color="inherit">About me</Button>
              </NavLink>
              <NavLink className={classes.btn} smooth to="#services">
                <Button color="inherit">Marketing Services</Button>
              </NavLink>
              <NavLink className={classes.btn} smooth to="#testimonials">
                <Button color="inherit">Testimonials</Button>
              </NavLink>

              <Button color="inherit" onClick={openDialog}>
                Get in touch
              </Button>
            </div>
            <div className={classes.navigation1}>
              <Button onClick={toggleDrawer("right", true)}>
                <MenuIcon />
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
