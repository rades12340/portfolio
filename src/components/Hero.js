import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  hero: {
    height: "100vh",
    backgroundImage: "url('/Component 14.svg')",
    backgroundPosition: "bottom right",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#black",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "center",
      boxShadow: "1px 1px 15px silver"
    },
    "@media (min-width:900px) and (min-height: 900px)": {
      height: "50vh"
    }
  },
  container: {
    position: "relative",
    top: "10vh",
    height: "100%",
    display: "grid",
    placeItems: "center"
  },
  heroLeft: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center"
    }
  },
  heroRight: {
    position: "relative",
    display: "grid",
    placeItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  img: {
    width: "70%"
  },
  header1: {
    fontWeight: 700,
    lineHeight: "1.3"
  },
  button: {
    margin: "1rem 0"
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item md={6} sm={12} className={classes.heroLeft}>
            <Typography variant="h3" component="h2" className={classes.header1}>
              Freelance Online Marketing, SEO & AdWords Consultant
            </Typography>
            <Button
              variant="contained"
              href="#contained-buttons"
              className={classes.button}
            >
              More about me
            </Button>
          </Grid>

          <Grid item md={6} sm={12} className={classes.heroRight}>
            <img className={classes.img} src="/undraw_all_the_data_h4ki.svg" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
