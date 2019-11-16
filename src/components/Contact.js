import React, { useContext } from "react";
import { Grid, Container, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import UiContext from "../context/uiContext";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  icon: {
    marginRight: "0.5em"
  }
};

const useStyles = makeStyles(theme => ({
  container: {
    backgroundImage: "url('/background17.svg')",
    backgroundSize: "cover",
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    color: "#E9FAF6"
  },
  textTop: {
    padding: "1em",
    textAlign: "center"
  },
  textLeft: {
    padding: "1em",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  icon: {
    marginRight: "0.5em"
  }
}));

const Contact = () => {
  const classes = useStyles();
  const uiContext = useContext(UiContext);

  const { openDialog } = uiContext;
  return (
    <div className={classes.container}>
      <Container>
        <Grid container style={{ padding: "2em 0" }}>
          <Grid item xs={12} sm={12} md={12} className={classes.textTop}>
            <Typography variant="h3" gutterBottom>
              Start your growth journey now
            </Typography>
            <Typography variant="h5" gutterBottom>
              If you want to work with me to take your business to the next
              level, simply fill out the form below or give me a call on
              07989097385.
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12} className={classes.textLeft}>
            <Typography variant="h4" gutterBottom>
              Let's grab a coffee and talk through your vision.
            </Typography>
            <Typography variant="h6" gutterBottom>
              I like to start all new projects with a fresh coffee and a chin
              wag to get to know my new client a little better and this will be
              no different with you. Lets arrange a meeting, discuss your firm's
              raison d'être and plan out how we're going to increase sales,
              improve exposure and grow the business.
            </Typography>
            <br />
            <Typography variant="h6" gutterBottom>
              <i style={styles.icon} className="fas fa-map-marked-alt"></i>
              Red Bank, Dresden, Stoke-on-Trent
            </Typography>

            <Typography variant="h6" gutterBottom>
              <i style={styles.icon} className="fas fa-clock"></i>
              7:00 - 23:00 (Mon-Sun)
            </Typography>

            <Typography variant="h6" gutterBottom>
              <i style={styles.icon} className="fas fa-phone"></i>
              07989 097 385
            </Typography>

            <Typography variant="h6" gutterBottom paragraph>
              <i style={styles.icon} className="fas fa-envelope-open"></i>
              daryl@daryltavernor.co.uk
            </Typography>

            <Button variant="contained" onClick={openDialog}>
              Contact me
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
