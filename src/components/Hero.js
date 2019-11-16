import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { NavHashLink as Link } from "react-router-hash-link";

const useStyles = makeStyles(theme => ({
  hero: {
    height: "100vh",
    position: "relative",
    backgroundImage: "url('/Component 14.svg')",
    backgroundPosition: "bottom right",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#E9FAF6",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "center",
      boxShadow: "1px 1px 15px silver"
    },
    "@media (min-width:900px) and (min-height: 900px)": {
      height: "50vh"
    },
    "@media (min-width:600px) and (min-height: 750px)": {
      height: "50vh"
    }
  },
  container: {
    position: "relative",
    paddingTop: "10vh",
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
    "& h5": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.2em"
      }
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      textAlign: "center"
    },
    [theme.breakpoints.down("xs")]: {
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
  header2: {
    fontSize: "0.4em",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  img: {
    width: "70%"
  },
  button: {
    margin: "1rem 0"
  },
  btn: {
    textDecoration: "none",
    color: "black"
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.hero} id="hero">
      <Container className={classes.container}>
        <Grid container>
          <Grid item md={7} sm={12} className={classes.heroLeft}>
            <Typography variant="h3" className={classes.header1} gutterBottom>
              Freelance Online Marketing, SEO & AdWords Consultant
            </Typography>
            <Typography variant="h5" gutterBottom>
              Hello, My name is Daryl and I'm an online marketing consultant
              based in Stoke-on-Trent, UK.
            </Typography>
            <div className={classes.header2}>
              <Typography variant="h6" gutterBottom>
                I help my clients' grow their businesses through proven online
                marketing methods that increase leads and achieve measurable
                success.
              </Typography>
              <Typography variant="h6" gutterBottom>
                I work with: Accountants, professional service companies,
                government agencies, e-commerce brands, investment backed
                start-ups and everyone in between.
              </Typography>
            </div>
            <Link smooth className={classes.btn} to={"/#about"}>
              <Button
                variant="contained"
                className={classes.button}
                size="large"
              >
                More about me
              </Button>
            </Link>
          </Grid>

          <Grid item md={5} sm={12} className={classes.heroRight}>
            <img
              className={classes.img}
              src="/undraw_all_the_data_h4ki.svg"
              alt="undraw_data"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
