import React from 'react';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  Container,
} from '@material-ui/core';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';

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
  logoLink: {
    color: '#ff9e00',
    textDecoration: 'none',
  },

  link: {
    color: '#fff',
    textDecoration: 'none',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Toolbar>
            <Container>
              <Grid container justify="space-between" alignItems="center">
                <Typography variant="h4">
                  <Link to="/" className={classes.logoLink}>MathMagicians</Link>
                </Typography>
                <Grid item container xs={5} md={3} justify="space-between">
                  <Link to="/" className={classes.link}>Home</Link>
                  <Link to="/calculator" className={classes.link}>Calculator</Link>
                  <Link to="/calculator" className={classes.link}>Calculator</Link>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/calculator" component={Calculator} />
          </Switch>
        </Container>
        <CssBaseline />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default (App);
