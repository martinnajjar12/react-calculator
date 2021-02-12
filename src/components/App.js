import React, { Component } from 'react';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
  Grid,
  withStyles,
  CssBaseline,
} from '@material-ui/core';
import PropTypes from 'prop-types';
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

const styles = {
  calWidth: {
    maxWidth: '375px',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      // operation: null,
    };
  }

  render() {
    const { classes } = this.props;
    const { total, next } = this.state;
    const handleClick = btnName => {
      const result = calculate(total, next, btnName);
      this.setState(result);
    };

    return (
      <ThemeProvider theme={theme}>
        <Grid container justify="center" direction="column" alignItems="center">
          <div className={classes.calWidth}>
            <Display result={total} />
            <ButtonPanel clickHandler={handleClick} />
          </div>
        </Grid>
        <CssBaseline />
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
