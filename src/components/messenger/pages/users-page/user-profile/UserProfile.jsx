import React from 'react';
// Hooks
import useWidth from '../../../hooks/useWidth';
// Styles
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { Typography, Avatar, Button, FormControl, Input } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  userProfileContainer: {
    position: 'absolute',
    display: 'flex',
    overflow: 'auto',
    height: '100%',
    padding: theme.spacing(3),
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '100px',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.0)',
      backgroundColor: 'rgba(127, 127, 127, 0.3)',
    },
  },
  userProfile: {
    margin: 'auto',
    textAlign: 'center',
  },
  userProfileSection: {
    paddingBottom: theme.spacing(3),
  },
  userProfileAvatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: theme.spacing(24),
    height: theme.spacing(24),
  },
}));

export default function UserProfile(props) {
  const { selectedUser, postMessage } = props;
  const classes = useStyles();
  const userProfileRef = React.useRef();
  const [userProfileWidth, setUserProfileWidth] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  useWidth(userProfileRef, setUserProfileWidth);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = (event) => {
    setMessage(event.target.value)
  };

  // Формирование тела запроса
  const setPostMessage = (event) => {
    event.preventDefault();
    postMessage({ to: selectedUser._id, body: message });
    setMessage('');
  };

  // Отправка сообщения по клику
  const handleButtonSubmit = (event) => {
    setPostMessage(event);
  };

  // Отправка сообщения по нажатию Enter
  const handleInputSubmit = (event) => {
    if (event.key === 'Enter') {
      setPostMessage(event);
      handleClose();
    };
  };

  const setUserProfile = () => {
    const { firstName, lastName, email, avatar } = selectedUser;
    return (
      <div className={classes.userProfile}>
        <div className={classes.userProfileSection}>
          <Avatar
            className={classes.userProfileAvatar}
            alt={`${firstName} ${lastName}`}
            src={avatar}
          />
        </div>
        <div className={classes.userProfileSection}>
          <Typography
            gutterBottom={true}
            variant="h6"
          >{`${firstName} ${lastName}`}</Typography>
          <Typography
            noWrap
            color="textSecondary"
            variant="body2"
          >{email}</Typography>
        </div>
        <div className={classes.userProfileSection}>
          <Button variant="contained" color="primary" onClick={handleOpen}>Написать сообщение</Button>
          <Dialog open={open} onClose={handleClose}>
            <form onSubmit={handleButtonSubmit}>
              <DialogTitle>Отправте пользователю сообщение</DialogTitle>
              <DialogContent className={classes.userProfileSection}>
                <FormControl>
                  <Input
                    placeholder="Сообщение"
                    autoFocus
                    multiline
                    value={message}
                    onChange={handleInput}
                    onKeyDown={handleInputSubmit}
                  />
                </FormControl>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Отмена</Button>
                <Button onClick={handleClose} type="submit">Отправить</Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>
      </div>
    );
  };

  return (
    <div ref={userProfileRef}>
      <div
        style={{ width: userProfileWidth }}
        className={classes.userProfileContainer}
      >
        {setUserProfile()}
      </div >
    </div>
  );
};