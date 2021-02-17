import React from 'react';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Container,
} from '@material-ui/core';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import NewHeader from './NewHeader';
import Quote from './Quote';

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

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <NewHeader />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/quote" component={Quote} />
        </Switch>
      </Container>
      <CssBaseline />
    </ThemeProvider>
  </BrowserRouter>
);

export default (App);
