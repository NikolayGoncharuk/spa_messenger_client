import React from 'react';
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
    gridArea: 'usersField',
  },
  userProfile: {
    gridArea: 'userProfile',
    display: 'block',
    marginRight: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function UsersPage(props) {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = React.useState(null);

  return (
    <div className={classes.root}>
      <div className={classes.usersField}>
        <UsersField
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          loading={props.loading}
          users={props.users}
          getUsers={props.getUsers}
        />
      </div>
      <div className={classes.userProfile}>
        {selectedUser && (
          <UserProfile
            selectedUser={selectedUser}
            postMessage={props.postMessage}
          />
        )}
      </div>
    </div>
  );
};