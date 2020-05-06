import React from 'react';
import socketIOClient from 'socket.io-client';
// Hooks
import useWidth from '../../../hooks/useWidth';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import Typography from '@material-ui/core/Typography';
// Components
import Top from '../../../top/Top';
import UsersList from './users-list/UsersList';
import Search from '../../../search/Search';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    height: '100%',
    overflow: 'auto',
    padding: theme.spacing(0, 6),
    '&::-webkit-scrollbar': {
      width: '0px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '100px',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.0)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    },
  },
}));

export default function UsersField(props) {
  const classes = useStyles();
  const usersRef = React.useRef();
  const [usersWidth, setUsersWidth] = React.useState(null);
  const [localUsers, setLocalUsers] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');

  useWidth(usersRef, (value) => {
    setUsersWidth(value);
  });

  React.useEffect(() => {
    setLocalUsers(props.users);
  }, [props.users]);

  React.useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_API_URL);
    socket.on('users', () => props.getUsers());
  }, []);

  React.useEffect(() => {
    if (localUsers) {
      const allUsers = props.users;

      // Ищем совпадения по значению поиска
      const filteredUsers = allUsers.filter((item) => {
        const firstName = item.firstName;
        const lastName = item.lastName;
        const variant1 = `${firstName} ${lastName}`;
        const variant2 = `${lastName} ${firstName}`;
        const regExp = new RegExp(searchValue, 'i');
        return regExp.test(variant1) || regExp.test(variant2);
      });

      setLocalUsers(filteredUsers);
    };
  }, [searchValue]);

  return (
    <div ref={usersRef}>
      <div style={{ width: usersWidth }} className={classes.container}>
        <div className={classes.title}>
          <Top />
          <Typography variant="h4">Пользователи</Typography>
        </div>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {(props.loading || (localUsers && localUsers.length > 0)) && (
          < UsersList
            selectedUser={props.selectedUser}
            setSelectedUser={props.setSelectedUser}
            loading={props.loading}
            localUsers={localUsers}
          />
        )}
      </div>
    </div>
  );
};