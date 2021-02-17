import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  Container,
} from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  logoLink: {
    color: '#ff9e00',
    textDecoration: 'none',
  },

  link: {
    color: '#fff',
    textDecoration: 'none',
  },

  activeLink: {
    fontWeight: 'bolder',
    color: '#ff9e00',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h4">
              <Link to="/" className={classes.logoLink}>MathMagicians</Link>
            </Typography>
            <Grid item container xs={5} md={3} justify="space-between">
              <NavLink exact activeClassName={classes.activeLink} to="/" className={classes.link}>Home</NavLink>
              <NavLink exact activeClassName={classes.activeLink} to="/calculator" className={classes.link}>Calculator</NavLink>
              <NavLink exact activeClassName={classes.activeLink} to="/quote" className={classes.link}>Quote</NavLink>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
