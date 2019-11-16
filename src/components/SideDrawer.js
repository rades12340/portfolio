import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import UiContext from "../context/uiContext";
import { NavHashLink as NavLink } from "react-router-hash-link";

const useStyles = makeStyles(theme => ({
  list: {
    width: "300px",
    height: "100%",
    display: "grid",
    placeItems: "center",
    [theme.breakpoints.up("xs")]: {
      width: "250px"
    }
  },
  navigation: {
    width: "auto",
    display: "grid",
    placeItems: "center"
  },
  btn: {
    textDecoration: "none",
    color: "black"
  }
}));

export default function SideDrawer() {
  const classes = useStyles();
  const uiContext = useContext(UiContext);

  const { toggleDrawer, right, openDialog } = uiContext;

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
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
    </div>
  );

  return (
    <div>
      <Drawer
        anchor="right"
        open={right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
