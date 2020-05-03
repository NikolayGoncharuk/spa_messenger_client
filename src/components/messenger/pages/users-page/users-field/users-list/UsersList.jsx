import React from 'react';
import socketIOClient from 'socket.io-client';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { Divider, Avatar, Paper, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import StyledBadge from '../../../../../../styles/styled-components/StyledBadge';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
  },
  skeletonWrapper: {
    width: '100%',
  },
}));

export default function UsersList(props) {
  const { loading, users, getUsers, setSelectedUser } = props;
  const classes = useStyles();
  const [selectedListItem, setSelectedListItem] = React.useState(null);

  React.useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_API_URL);
    socket.on('users', () => getUsers());
  }, []);

  const handleListItem = (item) => {
    setSelectedListItem(item._id);
    setSelectedUser(item);
  };

  const bootArray = new Array(10);

  function setDialogsItems() {
    return (
      (loading ? Array.from(bootArray) : users).map((item, index) => {
        if (item) {
          return (
            <React.Fragment key={index}>
              <ListItem
                alignItems="flex-start"
                button
                selected={selectedListItem === item._id}
                onClick={() => handleListItem(item)}
              >
                <ListItemAvatar>
                  <StyledBadge
                    invisible={!item.status}
                    overlap="circle"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                    variant="dot"
                  >
                    <Avatar alt={`${item.firstName} ${item.lastName}`} src={item.avatar} />
                  </StyledBadge>
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.firstName} ${item.lastName}`}
                  primaryTypographyProps={{ noWrap: true }}
                  secondary="Maximum number of rows to display when multiline option."
                  secondaryTypographyProps={{ noWrap: true }}
                />
              </ListItem>
              {index + 1 < users.length && <Divider variant="inset" component="li" />}
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Skeleton variant="circle" width={40} height={40} />
                </ListItemAvatar>
                <Box pt={0.5} pb={1} className={classes.skeletonWrapper}>
                  <Skeleton height="24px" width="60%" />
                  <Skeleton />
                </Box>
              </ListItem>
              {index + 1 < bootArray.length && <Divider variant="inset" component="li" />}
            </React.Fragment>
          );
        };
      })
    );
  };

  return (
    <Paper className={classes.root}>
      <List>
        {setDialogsItems()}
      </List>
    </Paper>
  );
};