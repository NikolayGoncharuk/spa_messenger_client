import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  const { users, loading } = props;
  const classes = useStyles();

  const bootArray = new Array(10);

  function setDialogsItems() {
    return (
      (loading ? Array.from(bootArray) : users).map((item, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem button={!loading} alignItems="flex-start">
              <ListItemAvatar>
                {item ?
                  <StyledBadge
                    invisible={!item.status}
                    overlap="circle"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                    variant="dot"
                  >
                    <Avatar alt={`${item.firstName} ${item.lastName}`} src={item.avatar} />
                  </StyledBadge> :
                  <Skeleton variant="circle" width={40} height={40} />
                }
              </ListItemAvatar>
              {item ?
                <ListItemText
                  primary={`${item.firstName} ${item.lastName}`}
                  primaryTypographyProps={{ noWrap: true }}
                  secondary="Maximum number of rows to display when multiline option."
                  secondaryTypographyProps={{ noWrap: true }}
                /> :
                <Box pt={0.5} pb={1} className={classes.skeletonWrapper}>
                  <Skeleton height="24px" width="60%" />
                  <Skeleton />
                </Box>
              }
            </ListItem>
            {index + 1 < (item ? users : bootArray).length && <Divider variant="inset" component="li" />}
          </React.Fragment>
        );
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