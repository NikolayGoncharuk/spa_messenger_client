import React from 'react';
// STyles
import { makeStyles } from '@material-ui/core/styles';
// Icons
import DoneAllIcon from '@material-ui/icons/DoneAll';
// Styled Components
import StyledBadge from '../../../../../../styles/styled-components/StyledBadge';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { Divider, Typography, Avatar, Paper, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
  },
  listItemTag: {
    marginLeft: theme.spacing(1),
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '28px 18px',
    justifyItems: 'end',
    alignItems: 'end',
  },
  skeletonWrapper: {
    width: '100%',
  },
}));

export default function DialogsList(props) {
  const { loading, profile, users, localDialogs, selectedDialog, setSelectedDialog } = props;
  const classes = useStyles();

  // Вернуть имя участника, id которого не совпадает с id авторизованного пользователя 
  const getParticipantName = (participants) => {
    let participantId = null;
    for (let i = 0; i < participants.length; i++) {
      if (participants[i] !== profile._id) {
        participantId = participants[i];
      };
    };
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id === participantId) {
        return `${users[i].firstName} ${users[i].lastName}`;
      };
    };
  };

  const bootArray = new Array(10);

  function setDialogsItems() {
    return (
      (loading ? Array.from(bootArray) : localDialogs).map((item, index) => {
        if (item) {
          return (
            <React.Fragment key={index}>
              <ListItem
                alignItems="flex-start"
                button
                selected={selectedDialog && selectedDialog._id === item._id}
                onClick={() => setSelectedDialog(item)}
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
                  primary={getParticipantName(item.participants)}
                  primaryTypographyProps={{ noWrap: true }}
                  secondary={item.lastMessage}
                  secondaryTypographyProps={{ noWrap: true }}
                />
                <div className={classes.listItemTag}>
                  <Typography color="textSecondary" variant="caption">{item.date}</Typography>
                  <DoneAllIcon style={{ marginTop: '2px' }} fontSize="inherit" />
                </div>
              </ListItem>
              {index + 1 < localDialogs.length && <Divider variant="inset" component="li" />}
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