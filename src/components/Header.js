import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FunctionsRoundedIcon from '@material-ui/icons/FunctionsRounded';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';

const useStyles = makeStyles(theme => ({
  root: {
    color: 'inherit',
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: '240px',
  },
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
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const properIcon = text => {
    if (text === 'Home') return (<HomeRoundedIcon />);
    if (text === 'Calculator') return (<FunctionsRoundedIcon />);
    return (<FormatQuoteRoundedIcon />);
  };

  const properPath = text => {
    if (text === 'Home') return '/';
    if (text === 'Calculator') return '/calculator';
    return '/quote';
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {['Home', 'Calculator', 'Quote'].map(text => (
          <NavLink
            key={text}
            exact
            activeClassName={classes.activeLink}
            className={classes.link}
            to={properPath(text)}
            onClick={handleDrawerToggle}
          >
            <ListItem button>
              <ListItemIcon className={classes.root}>{ properIcon(text) }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Container>
            <Grid container justify="space-between" alignItems="center">
              <Typography variant="h5" noWrap className={classes.logoLink}>
                Math Magicians
              </Typography>
              <Hidden xsDown>
                <Grid item container xs={5} md={3} justify="space-between">
                  <NavLink exact activeClassName={classes.activeLink} to="/" className={classes.link}>Home</NavLink>
                  <NavLink exact activeClassName={classes.activeLink} to="/calculator" className={classes.link}>Calculator</NavLink>
                  <NavLink exact activeClassName={classes.activeLink} to="/quote" className={classes.link}>Quote</NavLink>
                </Grid>
              </Hidden>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp>
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'left' : 'right'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default Header;
