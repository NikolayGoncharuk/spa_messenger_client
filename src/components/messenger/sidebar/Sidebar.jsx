import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../store/reducers/authReducer';
import { nav } from '../../../services/routes/routes';
import { NavLink } from 'react-router-dom';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Icons
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HelpIcon from '@material-ui/icons/Help';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
// Styled Components
import StyledBadge from '../../../styles/styled-components/StyledBadge';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Avatar, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  userData: {
    padding: theme.spacing(2, 0, 2, 2),
    display: 'grid',
    gridTemplateColumns: 'auto calc(100% - 88px)',
    gridGap: theme.spacing(3),
  },
  profileAvatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  profileName: {
    lineHeight: 1.2,
  },
}));

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(function Menu(props) {
  const { isAuth, profile: { firstName, lastName, email } } = props.auth;
  const classes = useStyles();

  const setListItem = () => {
    return Object.values(nav).map((item, index) => {
      return (
        <ListItem
          button
          component={NavLink}
          to={item.path}
          disabled={item.disabled}
          key={index}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      );
    });
  };

  return (
    <div>
      <div className={classes.userData}>
        <div>
          <StyledBadge
            invisible={!isAuth}
            overlap="circle"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            variant="dot"
          >
            <Avatar className={classes.profileAvatar} alt={`${firstName} ${lastName}`} src="" />
          </StyledBadge>
        </div>
        <div>
          <Typography
            className={classes.profileName}
            gutterBottom={true}
            variant="h6"
          >{`${firstName} ${lastName}`}</Typography>
          <Typography
            noWrap
            color="textSecondary"
            variant="body2"
          >{email}</Typography>
        </div>
      </div >
      <Divider />
      <List>
        {setListItem()}
        <ListItem button onClick={props.logout}>
          <ListItemIcon><MeetingRoomIcon /></ListItemIcon>
          <ListItemText primary="Выйти" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button disabled>
          <ListItemIcon><PersonAddIcon /></ListItemIcon>
          <ListItemText primary="Пригласить друзей" />
        </ListItem>
        <ListItem button disabled>
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Вопросы о Messenger" />
        </ListItem>
      </List>
    </div>
  );
});