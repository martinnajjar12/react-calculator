import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
  Grid,
  makeStyles,
  CssBaseline,
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
  calculate();
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container justify="center" direction="column" alignItems="center">
        <div className={classes.calWidth}>
          <Display />
          <ButtonPanel />
        </div>
      </Grid>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
