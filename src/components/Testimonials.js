import React from "react";
import Testimonial from "./Testimonial";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    position: "relative",
    justifyContent: "space-around",
    padding: "7em 0 2em",
    "@media (max-width: 1100px)": {
      flexDirection: "column",
      alignItems: "center",
      padding: "3em 0 2em"
    }
  }
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <div id="testimonials">
      <Container style={{ padding: "4em 0 2em" }}>
        <div style={{ width: "70%", margin: "auto" }}>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            I'm a highly recommended online marketing consultant.
          </Typography>
          <Typography
            variant="h5"
            style={{ textAlign: "center", marginTop: "1em" }}
          >
            Meet my happy clients.
          </Typography>
        </div>
        <div className={classes.container}>
          <Testimonial
            photo="/testimonial1.jpg"
            quote="Daryl handles all our online advertising and we couldn't be happier with
        the results. In just 3 months our turnover has increased by 25%."
            name="Mark Milner"
            position="Period Property Store"
          />
          <Testimonial
            photo="/testimonial2.jpg"
            quote="Daryl's work is terrific! He has great knowledge in the field of SEO & marketing, along with advice on Google & Google shopping. Also his on page advice on website content, layout & structure was invaluable."
            name="Matt Fuller"
            position="Woodpecker Interiors"
          />
          <Testimonial
            photo="/testimonial3.png"
            quote="Daryl has been a trusted freelance partner for social media work over the last few years. He has helped setup and update social media properties in Facebook, Google+, Twitter and Pinterest. He is quick, competent, reliable and highly recommended."
            name="Craig Johnson"
            position="Craig Johnson Consulting"
          />
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
