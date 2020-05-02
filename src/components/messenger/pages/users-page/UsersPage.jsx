import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../../store/reducers/usersReducer';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Components
import UsersField from './users-field/UsersField';
import UserProfile from './user-profile/UserProfile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '500px 1fr',
    gridTemplateAreas: "'usersField userProfile'",
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  usersField: {
    display: 'block',
    gridArea: 'usersField',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  userProfile: {
    gridArea: 'userProfile',
    marginRight: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
}));

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, { getUsers })(
  function UsersPage(props) {
    const { users, getUsers } = props;
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      setLoading(true);
      getUsers(() => setLoading(false));
    }, []);

    return (
      <div className={classes.root}>
        <div className={classes.usersField}>
          <UsersField users={users} loading={loading} />
        </div>
        <div className={classes.userProfile}>
          <UserProfile />
        </div>
      </div>
    );
  }
);