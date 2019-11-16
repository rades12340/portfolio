import React from "react";
import { Container } from "@material-ui/core";
import Count from "./Count";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "2em 0",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  }
}));

const CountUp = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#B8EFC6" }}>
      <Container className={classes.container}>
        <Count
          logo="/iconmonstr-currency-11-64.png"
          value={1000000}
          text="£1 million budgets invested wisely"
        />
        <Count
          logo="/iconmonstr-chart-4-64.png"
          value={2000}
          text="2000% increase in conversions for clients"
        />
        <Count
          logo="/iconmonstr-customer-1-64.png"
          value={150}
          text="Over 150 happy clients served in Staffordshire & the world"
        />
      </Container>
    </div>
  );
};

export default CountUp;
