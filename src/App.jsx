import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUserData } from './store/reducers/authReducer';
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

export default connect(mapStateToProps, { getUserData })(function App(props) {
  const classes = useStyles();
  let theme = responsiveFontSizes(makeTheme(props.theme));
  const { isAuth, isFetching } = props.auth;

  React.useEffect(() => {
    props.getUserData();
  }, [isAuth]);

  function setRoutes() {
    if (isFetching) {
      return (
        <div className={classes.circularProgressWrapper}>
          <CircularProgress color="inherit" className={classes.circularProgress} />
        </div>
      );
    };
    if (isAuth) {
      return (
        <Switch>
          <Route path="/chat" render={() => <Messenger />} />
          <Redirect to="/chat" />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route exact path="/" render={() => <StartPage />} />
          <Redirect to="/" />
        </Switch>
      );
    };
  };

  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      {setRoutes()}
    </ThemeProvider >
  );
});