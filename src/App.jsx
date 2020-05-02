import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getProfile } from './store/reducers/authReducer';
// Styles
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeTheme from './styles/theme/theme';
// Components
import StartPage from './components/start-page/StartPage';
import Messenger from './components/messenger/Messenger';
import Loading from './components/loading/Loading';

const mapStateToProps = (state) => ({
  theme: state.theme,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfile })(
  function App(props) {
    let theme = responsiveFontSizes(makeTheme(props.theme));
    const { isAuth, profile } = props.auth;
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      setLoading(true);
      props.getProfile(() => setLoading(false));
    }, [isAuth]);

    function setRoutes() {
      if (loading) {
        return <Loading />;
      };
      if (isAuth && profile) {
        return (
          <Messenger />
        );
      } else {
        return (
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
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
  }
);