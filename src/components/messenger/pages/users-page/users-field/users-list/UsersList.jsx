import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { Divider, Avatar, Paper } from '@material-ui/core';
import StyledBadge from '../../../../../../styles/styled-components/StyledBadge';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
  },
}));

export default function UsersList(props) {
  const classes = useStyles();

  function setDialogsItems() {
    return props.users.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <ListItem button alignItems="flex-start">
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
              secondary="Maximum number of rows to display when multiline option is set to true."
              secondaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
          {index + 1 < props.users.length && <Divider variant="inset" component="li" />}
        </React.Fragment>
      );
    });
  };

  return (
    <Paper className={classes.root}>
      <List>
        {setDialogsItems()}
      </List>
    </Paper>
  );
};