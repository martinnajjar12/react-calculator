import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '25px',
    textAlign: 'right',
    height: '75px',
    width: '93%',
    fontSize: '3.8rem',
  },
});

const Display = ({ result }) => {
  const classes = useStyles();
  return (<div className={classes.root}>{result || 0}</div>);
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
