import React, { useState } from 'react';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
  Grid,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f393d',
    },
    secondary: {
      main: '#ff9e00',
    },
    type: 'dark',
  },
});

const useStyles = makeStyles({
  calWidth: {
    maxWidth: '375px',
  },
});

const App = () => {
  const calculator = {
    total: null,
    next: null,
    operation: null,
  };

  const [calState, setCalState] = useState(calculator);
  const classes = useStyles();

  const handleClick = btnName => {
    const result = calculate(calState, btnName);
    setCalState(() => result);
  };

  const displayProperValue = (total, next) => {
    if (next) {
      return next;
    }
    return total;
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center" direction="column" alignItems="center">
        <div className={classes.calWidth}>
          <Display result={displayProperValue(calState.total, calState.next)} />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </Grid>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default (App);
