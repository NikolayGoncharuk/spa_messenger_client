import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// Styles
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeTheme from './styles/theme/theme';
// Components
import StartPage from './components/start-page/StartPage';
import Messenger from './components/messenger/Messenger';

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps, {})(function App(props) {
  let theme = responsiveFontSizes(makeTheme(props.theme));

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Switch>
        <Route exact path="/" render={() => <StartPage />} />
        <Route path="/chat" render={() => <Messenger />} />
      </Switch>
    </ThemeProvider >
  );
});