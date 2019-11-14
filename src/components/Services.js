import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  leftText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    padding: theme.spacing(3)
  },
  photoSection: {
    position: "relative",
    height: "100%",
    width: "100%",
    height: "60vh",
    // backgroundImage: "url('/undraw_mobile_marketing_iqbr .svg')",
    backgroundSize: "contain",
    backgroundPosition: "center ",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "initial",
    [theme.breakpoints.down("sm")]: {
      height: "60vh"
    }
  },
  switchFlex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse"
    }
  }
}));

const Services = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid
          container
          spacing={3}
          style={{ padding: "2em 0", textAlign: "center" }}
        >
          <Grid item md={12} style={{ textAlign: "center" }}>
            <Typography variant="h3">How I can help you</Typography>
            <Typography variant="h5">
              My marketing services are cost effective, expertly implemented and
              have a personal touch. I don't do off-the-shelf solutions, each
              service is tailored to you.
            </Typography>
          </Grid>
          <Grid item md={7} className={classes.leftText}>
            <Typography variant="h6">
              My marketing services are cost effective, expertly implemented and
              have a personal touch. I don't do off-the-shelf solutions, each
              service is tailored to you.
            </Typography>
          </Grid>
          <Grid
            item
            md={5}
            className={classes.photoSection}
            style={{
              backgroundImage: "url('/undraw_mobile_marketing_iqbr .svg')"
            }}
          ></Grid>
          <div className={classes.switchFlex}>
            <Grid
              item
              md={5}
              className={classes.photoSection}
              style={{ backgroundImage: "url('/seo.svg')" }}
            ></Grid>
            <Grid item md={7} className={classes.leftText}>
              <Typography variant="h6">
                My marketing services are cost effective, expertly implemented
                and have a personal touch. I don't do off-the-shelf solutions,
                each service is tailored to you.
              </Typography>
            </Grid>
          </div>
          <Grid item md={7} className={classes.leftText}>
            <Typography variant="h6">
              My marketing services are cost effective, expertly implemented and
              have a personal touch. I don't do off-the-shelf solutions, each
              service is tailored to you.
            </Typography>
          </Grid>
          <Grid
            item
            md={5}
            className={classes.photoSection}
            style={{
              backgroundImage: "url('/undraw_make_it_rain_iwk4.svg')"
            }}
          ></Grid>
          <div className={classes.switchFlex}>
            <Grid
              item
              md={5}
              className={classes.photoSection}
              style={{
                backgroundImage: "url('/undraw_email_campaign_qa8y.svg')"
              }}
            ></Grid>
            <Grid item md={7} className={classes.leftText}>
              <Typography variant="h6">
                My marketing services are cost effective, expertly implemented
                and have a personal touch. I don't do off-the-shelf solutions,
                each service is tailored to you.
              </Typography>
            </Grid>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
