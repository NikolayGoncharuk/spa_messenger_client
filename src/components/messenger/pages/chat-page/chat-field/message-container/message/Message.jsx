import React from 'react';
import socketIOClient from 'socket.io-client';
// Styles
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// Styled Components
import { Typography, Paper, Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  messageLeft: {
    marginRight: 'auto',
    gridTemplateAreas: "'avatar messageBody' 'empty messageTime'",
  },
  messageRight: {
    marginLeft: 'auto',
    gridTemplateAreas: "'messageBody avatar' 'messageTime empty'",
  },
  messageBodyLeft: {
    borderRadius: '30px 30px 30px 0',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  messageBodyRight: {
    borderRadius: '30px 30px 0 30px',
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  messageTimeLeft: {
    textAlign: 'left',
  },
  messageTimeRight: {
    textAlign: 'right',
  },
  messageContainer: {
    display: 'flex',
    margin: theme.spacing(2, 0),
  },
  message: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto auto',
    gridColumnGap: theme.spacing(2),
    alignItems: 'end',
    maxWidth: '70%',
  },
  messageBody: {
    padding: theme.spacing(2, 3),
  },
  messageTime: {
    marginTop: theme.spacing(1),
    lineHeight: '100%',
  },
  gridAreaAvatar: {
    gridArea: 'avatar',
  },
  gridAreaMessageBody: {
    gridArea: 'messageBody',
  },
  gridAreaEmpty: {
    gridArea: 'empty',
  },
  gridAreaMessageTime: {
    gridArea: 'messageTime',
  },
}));

export default function ChatWindow(props) {
  const { messages, getMessages, selectedDialog, profile } = props;
  const classes = useStyles();

  React.useEffect(() => {
    if (selectedDialog) {
      getMessages(selectedDialog._id);
    }
  }, [selectedDialog]);

  React.useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_API_URL);
    socket.on('messages', () => getMessages());
  }, []);

  function setMessages() {
    return messages.map((item, index) => {
      const from = item.from;
      const me = profile._id;

      const message = clsx(classes.message, {
        [classes.messageLeft]: (from !== me),
        [classes.messageRight]: (from === me),
      });
      const messageBody = clsx(
        classes.messageBody, classes.gridAreaMessageBody, {
        [classes.messageBodyLeft]: (from !== me),
        [classes.messageBodyRight]: (from === me),
      });
      const messageTime = clsx(
        classes.messageTime, classes.gridAreaMessageTime, {
        [classes.messageTimeLeft]: (from !== me),
        [classes.messageTimeRight]: (from === me),
      });

      return (
        <div className={classes.messageContainer} key={index}>
          <div className={message}>
            <Avatar className={classes.gridAreaAvatar} alt="Роджер Гилл" src="" />
            <Paper elevation={0} className={messageBody}>
              <Typography>{item.body}</Typography>
            </Paper>
            <div className={classes.gridAreaEmpty}></div>
            <Typography color="textSecondary" component="p" variant="caption" className={messageTime}>{item.date}</Typography>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {setMessages()}
    </div>
  );
};