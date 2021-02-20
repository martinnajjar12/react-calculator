import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const useStyles = makeStyles({
  calWidth: {
    maxWidth: '375px',
  },
});

const Calculator = () => {
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
    <Grid container justify="center" direction="column" alignItems="center">
      <div className={classes.calWidth}>
        <Display result={displayProperValue(calState.total, calState.next)} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </Grid>
  );
};

export default Calculator;
