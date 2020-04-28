import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getProfileData } from './store/reducers/authReducer';
// Styles
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeTheme from './styles/theme/theme';
import { makeStyles } from '@material-ui/core/styles';
// Styled Component
import CircularProgress from '@material-ui/core/CircularProgress';
// Components
import StartPage from './components/start-page/StartPage';
import Messenger from './components/messenger/Messenger';

const useStyles = makeStyles(theme => ({
  circularProgressWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  circularProgress: {
    margin: 'auto',
  },
}));

const mapStateToProps = (state) => ({
  theme: state.theme,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileData })(function App(props) {
  const classes = useStyles();
  let theme = responsiveFontSizes(makeTheme(props.theme));
  const { isAuth } = props.auth;

  React.useEffect(() => {
    props.getProfileData();
  }, [isAuth]);

  function Main() {
    if (!isAuth && !localStorage.token) {
      return (
        <Switch>
          <Route exact path="/" render={() => <StartPage />} />
          <Redirect to="/" />
        </Switch>
      );
    } else if (isAuth && localStorage.token) {
      return (
        <Switch>
          <Route path="/chat" render={() => <Messenger />} />
          <Redirect to="/chat" />
        </Switch>
      );
    } else {
      return (
        <div className={classes.circularProgressWrapper}>
          <CircularProgress color="inherit" className={classes.circularProgress} />
        </div>
      );
    };
  };

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Main />
    </ThemeProvider >
  );
});