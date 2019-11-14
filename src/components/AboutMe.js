import React from "react";
import { Container, Typography, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    container: {
      textAlign: "center"
    },
    header: {
      padding: theme.spacing(2),
      textAlign: "center"
    },

    aboutMe: {
      padding: theme.spacing(3),
      backgroundColor: "#E2E1E4",
      textAlign: "left"
    },
    photoSection: {
      position: "relative",
      height: "100%",
      width: "100%",
      backgroundImage: "url('/photo about me page.png')",
      backgroundSize: "cover",
      backgroundPosition: "center ",
      backgroundAttachment: "initial",
      [theme.breakpoints.down("sm")]: {
        height: "468px"
      }
    },
    button: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  };
});

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={3} style={{ padding: "2em 0" }}>
        <Grid item xs={12} sm={12} md={12} className={classes.header}>
          <Typography variant="h3" component="h2" className={classes.header}>
            Delivering a personal service...
          </Typography>
          <Typography variant="body1" className={classes.header}>
            I'm all about getting to know my clients and their customers. By
            having a closer relationship, I can truly understand your needs and
            achieve better results.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.aboutMe}>
            <Typography variant="body1" component="h6">
              ABOUT ME
            </Typography>
            <Typography variant="h4">
              I'm all about getting to know my clients and their customers. By
              having a closer relationship, I can truly understand your needs
              and achieve better results.
            </Typography>
            <br />
            <Typography variant="body1">
              Growing up in a successful family business has taught me 2 things:
              service and quality are paramount. Without both, your work is
              worthless.
              <br />
              <br />
              I've implemented these qualities in everything I've done, from
              securing my two university degrees, to working as a customer
              service agent, a digital marketing manager and now as a
              consultant.
            </Typography>
            <Button
              variant="contained"
              href="#contained-buttons"
              className={classes.button}
            >
              More about me
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={classes.photoSection}>
            {/* <img
              className={classes.img}
              src={"/photo about me page.png"}
              alt=""
            /> */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
