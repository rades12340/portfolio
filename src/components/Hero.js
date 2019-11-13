import React from "react";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  hero: {
    height: "90vh",
    backgroundImage: "url('/background.jpeg')"
  },
  container: {
    margin: "auto",
    // margin: 0,
    textAlign: "center",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Container className={classes.container} maxWidth="md">
        <Typography variant="h3" component="h2">
          Freelance Online Marketing, SEO & AdWords Consultant
        </Typography>
        <Typography variant="h5" component="h2">
          Hello, My name is Daryl and I'm an online marketing consultant based
          in Stoke-on-Trent, UK.
        </Typography>
        <Typography variant="body1" component="h2">
          I help my clients' grow their businesses through proven online
          marketing methods that increase leads and achieve measurable success.
          I work with: Accountants, professional service companies, government
          agencies, e-commerce brands, investment backed start-ups and everyone
          in between.
        </Typography>
      </Container>
    </div>
  );
};

export default Hero;
