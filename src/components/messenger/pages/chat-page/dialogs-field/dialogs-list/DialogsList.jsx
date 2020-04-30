import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { Divider, Typography, Avatar, Paper } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import StyledBadge from '../../../../../../styles/styled-components/StyledBadge';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  listItemTag: {
    marginLeft: theme.spacing(1),
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '28px 18px',
    justifyItems: 'end',
    alignItems: 'end',
  },
}));

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, {})(function DialogsList(props) {
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
            <div className={classes.listItemTag}>
              <Typography color="textSecondary" variant="caption">12.04</Typography>
              <DoneAllIcon style={{ marginTop: '2px' }} fontSize="inherit" />
            </div>
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
});