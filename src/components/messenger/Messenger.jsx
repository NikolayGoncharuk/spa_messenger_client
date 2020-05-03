import React from 'react';
import { connect } from 'react-redux';
import { initializeMessenger } from '../../store/reducers/chatReducer';
import { Route, Switch, Redirect } from 'react-router-dom';
import { nav } from '../../services/routes/routes';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Components
import Sidebar from './sidebar/Sidebar';
import ChatPage from './pages/chat-page/ChatPage';
import UsersPage from './pages/users-page/UsersPage';
import SettingsPage from './pages/settings-page/SettingsPage';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '300px auto',
    gridTemplateAreas: "'menu content'",
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  menu: {
    display: 'block',
    gridArea: 'menu',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  content: {
    gridArea: 'content',
  },
  textEmptyPage: {
    position: 'absolute',
    left: 0,
    width: '100%',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));

export default connect(null, { initializeMessenger })(
  function Messenger(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      setLoading(true);
      props.initializeMessenger(() => setLoading(false));
    }, []);

    return (
      <div className={classes.root}>
        <div className={classes.menu}>
          <Sidebar />
        </div>
        <div className={classes.content}>
          <Switch>
            <Route path={nav.chat.path} >
              <ChatPage loading={loading} />
            </Route>
            <Route path={nav.users.path}>
              <UsersPage loading={loading} />
            </Route>
            <Route path={nav.settings.path} component={SettingsPage} />
            <Redirect to={nav.chat.path} />
          </Switch>
        </div>
      </div >
    );
  }
);