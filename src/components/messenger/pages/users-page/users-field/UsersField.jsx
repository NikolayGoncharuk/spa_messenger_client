import React from 'react';
import { setDynamicWidth } from '../../../setDynamicWidth';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { IconButton, Typography } from '@material-ui/core';
// Icons
import CreateIcon from '@material-ui/icons/Create';
// Components
import Top from '../../../top/Top';
import UsersList from './users-list/UsersList';
import Search from '../../../search/Search';

const useStyles = makeStyles(theme => ({
  usersContainer: {
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
  },
  usersTitle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function UsersField(props) {
  const classes = useStyles();
  const usersRef = React.useRef();
  const [usersWidth, setUsersWidth] = React.useState(null);

  React.useEffect(() => {
    setDynamicWidth(usersRef, (value) => {
      setUsersWidth(value);
    });
  }, []);

  return (
    <div ref={usersRef}>
      <div style={{ width: usersWidth }} className={classes.usersContainer}>
        <Top />
        <div className={classes.usersTitle}>
          <Typography variant="h4">Пользователи</Typography>
          <IconButton>
            <CreateIcon />
          </IconButton>
        </div>
        <Search />
        <UsersList {...props} />
      </div>
    </div>
  );
};