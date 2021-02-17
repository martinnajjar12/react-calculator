import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Drawer,
} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Link, NavLink } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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

  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = () => (
    <div>
      <div className={classes.toolbar} />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? 'Hello' : 'Something else'}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h4">
              <Link to="/" className={classes.logoLink}>MathMagicians</Link>
            </Typography>
            { matches
              ? (
                <>
                  <Hidden smDown implementation="css">
                    <Drawer
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                      variant="permanent"
                      open
                    >
                      {drawer}
                    </Drawer>
                  </Hidden>
                  <IconButton onClick={handleDrawerToggle}>
                    <MenuRoundedIcon />
                  </IconButton>
                </>
              )
              : (
                <Grid item container xs={5} md={3} justify="space-between">
                  <NavLink exact activeClassName={classes.activeLink} to="/" className={classes.link}>Home</NavLink>
                  <NavLink exact activeClassName={classes.activeLink} to="/calculator" className={classes.link}>Calculator</NavLink>
                  <NavLink exact activeClassName={classes.activeLink} to="/quote" className={classes.link}>Quote</NavLink>
                </Grid>
              )}
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
