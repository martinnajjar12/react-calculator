import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  quoteMargin: {
    marginTop: '10vh',
    fontSize: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
}));

const Quote = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.quoteMargin}>
      Mathematics is not about numbers, equations, computations, or algorithms: it is
      about understanding. –William Paul Thurston
    </Typography>
  );
};

export default Quote;
